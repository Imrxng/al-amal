import React from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import sfeer from '@/assets/images/sfeerbeeld-1.webp';
import ContainerTitle from './ContainerTitle';

const MededelingenDetail = () => {
    const announcements = [
        {
            id: '1',
            title: 'Nieuwe workshops zomer 2025',
            body: 'Deze zomer organiseren we een reeks creatieve workshops voor jong en oud. Je kan je inschrijven via onze website...',
            date: '2025-06-10',
            imageUrl: '/images/workshops-zomer.jpg',
        },
        {
            id: '2',
            title: 'Culturele avond met muziek en poëzie',
            body: 'Op vrijdag 21 juni nodigen we jullie uit voor een avond vol cultuur met lokale artiesten. Gratis toegang!',
            date: '2025-06-05',
            imageUrl: '/images/avond-cultuur.jpg',
        },
    ];

    const router = useRouter();
    const { id } = router.query;
    const announcement = announcements.find((a) => a.id === id);

    if (!announcement) {
        return (
            <div className="not-found">
                Mededeling niet gevonden.
            </div>
        );
    }

    return (
        <>
            <ContainerTitle link="/mededelingen" title="Mededelingen" />

            <main className="detail-wrapper">

                <div className="image-wrapper-detail">
                    <Image
                        src={sfeer}
                        alt={announcement.title}
                        layout="responsive"
                        width={1920}
                        height={1080}
                        objectFit="contain"
                        priority
                    />
                </div>

                <article className="detail-content">
                    <h1 className="detail-title">{announcement.title}</h1>
                    <time className="detail-date" dateTime={announcement.date}>
                        {new Date(announcement.date).toLocaleDateString('nl-BE', {
                            day: 'numeric',
                            month: 'long',
                            year: 'numeric',
                        })}
                    </time>
                    <p className="detail-body">{announcement.body}</p>
                </article>
            </main>
        </>
    );
};

export default MededelingenDetail;
