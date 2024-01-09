import classNames from 'classnames';
import styles from './card.module.scss';

export interface CardProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const Card = ({ className }: CardProps) => {
    return <div className={classNames(styles.root, className)}>
        <div className={styles.card}>
            <img src="https://wixplosives.github.io/codux-assets-storage/add-panel/image-placeholder.jpg" alt="" className={styles['card-img']} />
            <div className={styles['card-footer']}>
                <div className={styles['card-footer-titlebar']}>
                    <span>
                        <h3 className={styles['card-footer-title']}>Mountain view</h3><p>Located in the mountain</p>
                    </span>
                    <h3 className={styles['card-footer-title']}>Heart</h3>
                </div>
                <div className={styles['card-footer-detail']}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s,</div>
            </div></div>
    </div>;
};
