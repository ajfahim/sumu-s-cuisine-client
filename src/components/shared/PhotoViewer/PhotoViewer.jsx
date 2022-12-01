import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';

const PhotoViewer = ({ image }) => {
    return (
        <PhotoProvider>
            <PhotoView src={image}>
                <img className='w-full h-full object-cover object-center' src={image} alt="" />
            </PhotoView>
        </PhotoProvider>
    );
};

export default PhotoViewer;