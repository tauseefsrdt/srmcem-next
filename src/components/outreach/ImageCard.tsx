interface ImageCardProps {
    src: string;
    caption?: string;
}
const ImageCard: React.FC<ImageCardProps> = ({ src, caption }) => (
    <div className='relative w-full'>
        <img className='w-full' src={src} alt={caption || 'Outreach activity'} />
        {caption && (
            <span className='w-full h-[50px] absolute bottom-0 left-0 bg-black rounded-b-lg bg-opacity-50 text-white px-3 flex items-center font-medium text-sm'>
                {caption}
            </span>
        )}
    </div>
);
export default ImageCard