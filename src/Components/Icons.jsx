import camera from '../ios-icons/svg/camera-2365232.svg';
import music from '../ios-icons/svg/apple-music-2365226.svg';
import calculator from '../ios-icons/svg/calculator-1575939.svg';
import photo from '../ios-icons/svg/photos-2365244.svg';
import clock from '../ios-icons/svg/clock-2365231.svg';
import store from '../ios-icons/svg/apple-store-1575941.svg';
import facetime from '../ios-icons/svg/facetime-1575950.svg';
import safari from '../ios-icons/svg/safari-2365241.svg';
import settings from '../ios-icons/svg/settings-2365240.svg';
import clips from '../ios-icons/svg/clips-1575951.svg';
import books from '../ios-icons/svg/books-2365234.svg';
import contacts from '../ios-icons/svg/contacts-2365230.svg';
import home from '../ios-icons/svg/home-2365227.svg';
import mail from '../ios-icons/svg/mail-2365225.svg';
import translate from '../ios-icons/svg/translate-2365238.svg';
import files from '../ios-icons/svg/files-2365229.svg';
import health from '../ios-icons/svg/health-2365228.svg';
import iosMessage from '../ios-icons/svg/ios-message-1575946.svg';
import notes from '../ios-icons/svg/notes-2365245.svg';
import measure from '../ios-icons/svg/measure-1575947.svg';
import voice from '../ios-icons/svg/voice-memos-1575942.svg';

// import files from '../ios-icons/svg/files-2365229.svg';
// import health from '../ios-icons/svg/health-2365228.svg';
// import iosMessage from '../ios-icons/svg/ios-message-1575946.svg';
// import notes from '../ios-icons/svg/notes-2365245.svg';
// import measure from '../ios-icons/svg/measure-1575947.svg';


const Icons = ({name, className}) => {
    const icons = { camera,
                    music,
                    voice,
                    measure,
                    notes,
                    store,
                    iosMessage,
                    health,
                    calculator,
                    photo,
                    clock,
                    facetime,
                    safari,
                    settings,
                    clips,
                    books,
                    contacts,
                    home,
                    mail,
                    translate,
                    files};
    return <img className={className} src={icons[name]} alt={name} />;
};

export default Icons;