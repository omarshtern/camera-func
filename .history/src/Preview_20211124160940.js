import { Close } from '@material-ui/icons'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router'
import './Preview.css'
import { resetCameraImage } from './features/slices/cameraSlice'

export default function Preview() {
    const image = useSelector(state => state.camera.cameraImage)

    const dispatch = useDispatch()
    const handleClose = () => {
        dispatch(resetCameraImage())
    }
    const history = useHistory()
    useEffect(() => {
        if(!image) {
            history.replace('/')
        }
    }, [image, history])
    return (
        <div className='preview'>
            <Close className='preview__close' onClick={handleClose} />
            <div className='preview__toolbarRight'>
                
            </div>
            <img src={image} />
        </div>
    )
}
