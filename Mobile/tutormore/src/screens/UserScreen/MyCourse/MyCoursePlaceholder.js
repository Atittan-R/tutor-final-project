import React from 'react';
import {
    Placeholder,
    PlaceholderMedia,
    PlaceholderLine,
    Fade, ShineOverlay
} from "rn-placeholder";
import {
    responsiveHeight,
    responsiveWidth,
    responsiveFontSize
} from "react-native-responsive-dimensions";


const MyCoursePlaceholder = () => {
    return (
        <Placeholder
            Animation={ShineOverlay}
            style={{
                marginVertical: 6,
                marginHorizontal: 15,
                borderRadius: 4
            }}
            Left={props => (
                <PlaceholderMedia
                    style={[
                        props.style,
                        {
                            width: responsiveWidth(22),
                            height: responsiveHeight(16)
                        }
                    ]}
                />
            )}
        >
            <PlaceholderLine style={{ marginTop: responsiveHeight(1) }} width={70} />
            <PlaceholderLine style={{ marginTop: responsiveHeight(1.5) }} width={50} />
            <PlaceholderLine width={50} />
        </Placeholder>
    );
};

export default MyCoursePlaceholder;
