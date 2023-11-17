import React from 'react'
import styles from './styles'

const UserBlock = ({ownerData: {ownerName, ownerLocation, ownerImg}}) => {
    return (
        <div style={styles.user_block}>
            <a  
                href={`https://instagram.com/${ownerName}`}
                target='_blank'
                rel='noreferrer'
            >
                <img
                    style={styles.avatar}
                    src={ownerImg}
                    alt={ownerName}
                />
            </a>
            <h2 style={styles.title_wrap}>
                <a 
                    style={styles.title}
                    href={`https://instagram.com/${ownerName}`}
                    target='_blank'
                    rel='noreferrer'
                >{ownerName}</a>
                <p style={styles.sub_title}>{ownerLocation}</p>
            </h2>
        </div>
    )
}

export default UserBlock
