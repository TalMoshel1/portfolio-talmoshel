import Image from 'next/image';
import BackgroundSvg from './BackgroundSvg';



const SearchEngineImage: React.FC = ({  }) => {
    return <div style={{ position:'absolute', left: '85%', top: '55%', transform: 'translate(-50%,-50%)', zIndex:2, width:'10rem'}}>
        <div style={{zIndex:1, position:'relative'}}>
        <Image src="/pc-logo-cropped.webp" alt="Search Engine Illustration" width={300} height={1} />

        </div> 

        <div style={{zIndex:0, position:'absolute', width:'100%', height:'100%', top:'0', left:'0'}}>
        <BackgroundSvg/>
        

        </div>
    </div>
}

export default SearchEngineImage;