import React from 'react'
import { styled } from '@mui/material/styles';
import Checkbox from '@mui/material/Checkbox';
function CheckBox({ id, SetChoose, isChoosen }) {
    const BpIcon = styled('span')(({ theme }) => ({
        borderRadius: 4,
        borderWidth: 2,
        borderColor: "black",
        width: 26,
        height: 26,

        backgroundColor: 'white',
        backgroundImage:
            theme.palette.mode === 'dark'
                ? 'linear-gradient(180deg,hsla(0,0%,100%,.05),hsla(0,0%,100%,0))'
                : 'linear-gradient(180deg,hsla(0,0%,100%,.8),hsla(0,0%,100%,0))',
        '.Mui-focusVisible &': {
            outline: '2px auto #00B27A',
            outlineOffset: 2,
        },
        'input:hover ~ &': {
            backgroundColor: theme.palette.mode === 'dark' ? '#30404d' : '#ebf1f5',
        }
    }));
    const BpCheckedIcon = styled(BpIcon)({
        backgroundColor: 'transparent',
        borderRadius: 4,
        width: 26,
        height: 26,
        borderWidth: 2,
        borderColor: "white",
        backgroundImage: 'linear-gradient(180deg,hsla(0,0%,100%,.1),hsla(0,0%,100%,0))',
        '&:before': {
            display: 'block',
            width: 22,
            height: 22,
            backgroundImage:
                "url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3E%3Cpath" +
                " fill-rule='evenodd' clip-rule='evenodd' d='M12 5c-.28 0-.53.11-.71.29L7 9.59l-2.29-2.3a1.003 " +
                "1.003 0 00-1.42 1.42l3 3c.18.18.43.29.71.29s.53-.11.71-.29l5-5A1.003 1.003 0 0012 5z' fill='%23fff'/%3E%3C/svg%3E\")",
            content: '""',
        },
        'input:hover ~ &': {
            backgroundColor: '#00B27A',
        },
    });

    function BpCheckbox(props) {
        function handleCheckBox(e) {
            const targetElemetnID = parseInt(e.target.id)
            const index = isChoosen.findIndex((id) => id === targetElemetnID)
            if (index === -1) SetChoose(old => old.concat(targetElemetnID))
            const NewList = isChoosen.filter((id) => id !== targetElemetnID)
            if (index !== -1) SetChoose(NewList)
        }

        return (
            <Checkbox
                sx={{
                    '&:hover': { bgcolor: 'transparent' },
                }}
                checked={isChoosen.includes(id)}
                disableRipple
                color="default"
                checkedIcon={<BpCheckedIcon />}
                icon={<BpIcon />}
                inputProps={{ 'aria-label': 'Checkbox demo' }}
                {...props}
                id={id}
                onClick={(e) => { handleCheckBox(e) }}
            />
        );
    }
    return (
        <BpCheckbox />
    )
}

export default CheckBox