import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import Image from "next/image"; // Import Image component from Next.js

const LoginForm = ({ className }) => {
    return (
        <div className={clsx("form-wrapper-one", className)} style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
            {/* Render just the image */}
            <Image src="/images/client/client-1.png" alt="Your Image" width={300} height={200} />

            {/* If you want to pass className prop to Image, use className prop like so:
            <Image src="/path_to_your_image.jpg" alt="Your Image" width={300} height={200} className="your-class-name" /> */}
        </div>
    );
};

LoginForm.propTypes = {
    className: PropTypes.string,
};
export default LoginForm;
