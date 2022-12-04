import ReactDOM from "react-dom";
import { fireEvent, render } from '@testing-library/react';
import { mockedContacts } from '../../__mocks__/mock.data';
import { Contacts } from './Contacts';

const mockFetch = jest.fn(({ body }) => {
    return new Promise((resolve, reject) => {
        if (typeof body !== 'string') {
            return reject('Not a string!')
        }

        resolve(true);
    });
});

global.fetch = mockFetch as jest.Mock;

describe('Contacts', () => {
    describe('Successful data fetching', () => {
        beforeAll(() => {
            (ReactDOM as any).createPortal = jest.fn((node) => node);
        })
    
        beforeEach(() => {
            (fetch as jest.Mock).mockImplementation(() => ({
                ok: true,
                json: () => Promise.resolve(mockedContacts)
            }));
        });
    
        afterEach(() => {
           (ReactDOM.createPortal as jest.Mock).mockClear()
        });
    
        it('should render contacts component with the appropriate info', async () => {
            const { findAllByTestId, getByTestId } = render(<Contacts />);
    
            const contacts = await findAllByTestId(/contact-test/i);
    
            expect(contacts.length).toBe(3);
        
            Array.from(contacts).forEach((_, index) => {
                expect(getByTestId(`contact-name-${mockedContacts[index].id}`).textContent).toBe(mockedContacts[index].name);
                expect(getByTestId(`contact-company-${mockedContacts[index].id}`).textContent).toBe(mockedContacts[index].company.name);
                expect(getByTestId(`contact-email-${mockedContacts[index].id}`).textContent).toBe(mockedContacts[index].email);
            });
        });
    
        it('should check the functionality of modal when a contact and modal-button are clicked', async () => {
            const { findAllByTestId, queryByTestId, getByTestId } = render(<Contacts />);
    
            expect(queryByTestId('test-modal')).not.toBeInTheDocument();
    
            const contacts = await findAllByTestId(/contact-test/i);
    
            fireEvent.click(contacts[0]);
    
            const modal = getByTestId('test-modal');
            const clickBtn = getByTestId('test-modal-close-btn');
    
            expect(modal).toBeInTheDocument();
            
            fireEvent.click(clickBtn);
    
            expect(modal).not.toBeInTheDocument();
        });
    
        it('should check if a contact is clicked, a modal pops up with all relative info', async () => {
            const { findAllByTestId, queryByTestId, getByTestId } = render(<Contacts />);
    
            expect(queryByTestId('test-modal')).not.toBeInTheDocument();
    
            const contacts = await findAllByTestId(/contact-test/i);
    
            fireEvent.click(contacts[0]);
    
            const modal = getByTestId('test-modal');
    
            expect(modal).toBeInTheDocument();
            expect(getByTestId('test-modal-name').textContent).toBe('Leanne Graham');
            expect(getByTestId('test-modal-company').textContent).toBe('Romaguera-Crona');
            expect(getByTestId('test-modal-username').textContent).toBe('Bret');
            expect(getByTestId('test-modal-street').textContent).toBe('Kulas Light');
            expect(getByTestId('test-modal-city').textContent).toBe('Gwenborough');
            expect(getByTestId('test-modal-suite').textContent).toBe('Apt. 556');
            expect(getByTestId('test-modal-phone').textContent).toBe('1-770-736-8031 x56442');
            expect(getByTestId('test-modal-email').textContent).toBe('Sincere@april.biz');
            expect(getByTestId('test-modal-website').textContent).toBe('hildegard.org');
        });
    });

    describe('Fail to fetch data', () => {
        it('should check if data fail to get feched an error message to get logged', async () => {
            const error = new Error('Failed to fetch data');
            
            (fetch as jest.Mock).mockImplementation(() => ({
                ok: true,
                json: () => Promise.reject(error)
            }));

            jest.spyOn(console, 'log');

            const { queryAllByTestId } = render(<Contacts />);

            await new Promise((resolve) => setTimeout(resolve, 1000));

            const contacts = queryAllByTestId(/contact-test/i);

            expect(contacts.length).toBe(0);
            expect(console.log).toHaveBeenCalledTimes(1);
            expect(console.log).toHaveBeenCalledWith('Failed to fetch data');
        });
    })
});
