import React from 'react'
import ContainerTitle from './ContainerTitle';
import LinkButton from './LinkButton';

const IntroLidWorden = () => {
    return (
        <div>
            <ContainerTitle link={'/lid-worden'} title={'Lid worden'} />
            <div id='lid-worden -container'>
                <div id='lid-worden-form'>
                    <h2>Hoe wilt u doneren?</h2>
                    <div id='buttons-lid-worden'>
                        <LinkButton href={'/doneren'} content={'Eenmalig'} />
                        <LinkButton href={'/lid-worden'} content={'Maandelijks'} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default IntroLidWorden