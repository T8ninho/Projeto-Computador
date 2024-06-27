import PropTypes from 'prop-types';
import { Icones, IconesContainer } from "./IconeDesktop.styles";
import { useState } from 'react';

export default function IconeDesktop({Icon, name}) {

    const [selected, setSelected] = useState(false);

    const handleSelect = () => {
        setSelected(!selected);
    };

    return(
        <IconesContainer isSelected={selected} onClick={handleSelect}>
            <Icones
                Icon={Icon}
            />
            <p>{name}</p>
        </IconesContainer>
    );
};

IconeDesktop.propTypes = {
	Icon: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired
};