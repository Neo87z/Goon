import PropTypes from "prop-types";
import clsx from "clsx";
import Image from "next/image";
import Button from "@ui/button";

const UploadVariants = ({ className, space }) => (
    <div
        className={clsx(
            "rn-upload-variant-area varient",
            space === 1 && "rn-section-gap",
            className
        )}
    >
        <div className="container">
            <div className="row">
                <div className="upload-variant-title-wrapper">
                    <h3 className="title text-center">Create NFTs</h3>
                    <p className="text-center">
                        Create your own unique NFT collection with multiple artworks or craft a single, exclusive NFT masterpiece that captures the essence of your creativity.
                    </p>
                </div>
            </div>
            <div className="row g-5 mt--40">
                <div className="offset-lg-3 col-lg-3 col-md-6 col-12">
                    <div className="upload-variant-wrapper">
                        <div className="variant-preview">
                            <Image
                                src="/images/upload-variants/Multiple.png"
                                alt="nuron-single"
                                width={495}
                                height={417}
                                priority
                            />
                        </div>
                        <Button
                            path="/create"
                            size="medium"
                            fullwidth
                            className="mt--20"
                        >
                            Create Single
                        </Button>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 col-12">
                    <div className="upload-variant-wrapper">
                        <div className="variant-preview">
                            <Image
                                src="/images/upload-variants/Simgle.png"
                                alt="nuron-single"
                                width={495}
                                height={417}
                                priority
                            />
                        </div>
                        <Button
                            path="/create"
                            size="medium"
                            fullwidth
                            className="mt--20"
                        >
                            Create Multiple
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

UploadVariants.propTypes = {
    className: PropTypes.string,
    space: PropTypes.oneOf([1]),
};

UploadVariants.defaultProps = {
    space: 1,
};

export default UploadVariants;
