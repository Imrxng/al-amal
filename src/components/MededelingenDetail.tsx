import React from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import sfeer from '@/assets/images/sfeerbeeld-1.webp';
import ContainerTitle from './ContainerTitle';
import { announcements } from '@/components/data/announcements'; 

const MededelingenDetail = () => {

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
                        src={announcement.imageUrl}
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
