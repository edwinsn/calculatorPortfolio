import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

export default function Skill(
    {
        name,
        tabIcon,
        icons,
        description,
        position
    }
) {


    const iconsFormatted = icons.map((icon, index) => <IconFormatted key={`skill-${name}-icon-${index}`}  {...icon} />);

    return (
        <div className={`flex-column centered ${position}`} >

            <input
                type="radio"
                name="same"
                id={name}
                className='display-none'
                readOnly
                checked={true} />
            <label htmlFor={name} >
                <img src={tabIcon} alt="" />
            </label>
            <span>
                {name}
            </span>

            <div>
                <h2 className='subtitle'>
                    {name}
                </h2>
                <div>
                    {iconsFormatted}
                </div>
                <p>
                    {description}
                </p>

            </div>
        </div>

    )


}

const IconFormatted = (icon) => {
    return !icon.isImage ?
        <FontAwesomeIcon
            icon={icon.src}
            title={icon.title}
            className={icon.className}
        />
        :
        <img
            src={icon.src}
            title={icon.tite}
            alt=""
        />
}
