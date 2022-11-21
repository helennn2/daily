
const WrapComponent = (props) => {
    return (
        <div id='wrap'>
            <HeaderComponent header={props.header} />
            <MainComponent />
            <FootComponent />
            <PopupComponent />
        </div>
    );
};
WrapComponent.defaultProps = {
    header: {
        title: "안녕하세여",
        imgSrc: "./images/logo.png",
        nav:[
            {}
        ]
    }
}
