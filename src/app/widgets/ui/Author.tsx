import Image from 'next/image';
import UserImage from '../../shared/images/photo_2024-09-09_19-08-05.jpg';
import { UserCardProps } from '../model/types';
import styles from '../../styles/index.module.css';

const UserCard: React.FC<UserCardProps> = ({ author }) => {
  return (
    <div className={styles.usercard}>
      <Image src={UserImage} alt="User image" width={200} height={200} />
      <h1>{`${author.firstName.toUpperCase()} ${author.lastName.toUpperCase()}`}</h1>
      <h3>{`${author.place}, ${author.role}`}</h3>
    </div>
  );
};

export default UserCard;
