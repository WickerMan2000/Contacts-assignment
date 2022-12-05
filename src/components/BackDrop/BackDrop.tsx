import styles from './BackDrop.module.css';

export const BackDrop = ({ onClick, show }: { onClick: React.MouseEventHandler, show: boolean }) => {
    return (
      <div data-testid="test-backdrop" className={show ? styles.backdrop : styles.display } onClick={onClick}></div>
    );
};
