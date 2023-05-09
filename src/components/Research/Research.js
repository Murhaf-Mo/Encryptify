import "./styles.css";
import video1 from "../../assets/v0/v1.mp4";
import video2 from "../../assets/v0/v2.mp4";
import video3 from "../../assets/v0/v3.mp4";
// import video4 from "../../assets/v0/v4.mp4";
// import video5 from "../../assets/v0/v5.mp4";
// import video6 from "../../assets/v0/v6.mp4";
// import video7 from "../../assets/v0/v7.mp4";
// import video8 from "../../assets/v0/v8.mp4";
// import video9 from "../../assets/v0/v9.mp4";
// import video10 from "../../assets/v0/v10.mp4";
// import video11 from "../../assets/v0/v11.mp4";
// import video12 from "../../assets/v0/v12.mp4";
// import video13 from "../../assets/v0/v13.mp4";
// import video14 from "../../assets/v0/v14.mp4";
// import video15 from "../../assets/v0/v15.mp4";
//

import React from "react";

export function Research() {
    return (<>
            <article>
                <div className={'back'}></div>
                <section>
                    <h2>Introducktion</h2>

                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ac
                        rhoncus quam.
                    </p>
                    <p>
                        Fringilla quam urna. Cras turpis elit, euismod eget ligula quis,
                        imperdiet sagittis justo. In viverra fermentum ex ac vestibulum.
                        Aliquam eleifend nunc a luctus porta. Mauris laoreet augue ut felis
                        blandit, at iaculis odio ultrices. Nulla facilisi. Vestibulum cursus
                        ipsum tellus, eu tincidunt neque tincidunt a.
                    </p>
                    <video autoPlay playsInline muted loop src={video1} width="750" height="500"></video>
                </section>
                <section>
                    <h2>Sub-header</h2>
                    <p>
                        In eget sodales arcu, consectetur efficitur metus. Duis efficitur
                        tincidunt odio, sit amet laoreet massa fringilla eu.
                    </p>
                    <p>
                        Pellentesque id lacus pulvinar elit pulvinar pretium ac non urna.
                        Mauris id mauris vel arcu commodo venenatis. Aliquam eu risus arcu.
                        Proin sit amet lacus mollis, semper massa ut, rutrum mi.
                    </p>
                    <p>Sed sem nisi, luctus consequat ligula in, congue sodales nisl.</p>
                    <p>
                        Vestibulum bibendum at erat sit amet pulvinar. Pellentesque pharetra
                        leo vitae tristique rutrum. Donec ut volutpat ante, ut suscipit leo.
                    </p>
                    <video autoPlay playsInline muted loop src={video2} width="750" height="500"></video>
                </section>


                <h2>Sub-header</h2>
                <p>
                    Maecenas quis elementum nulla, in lacinia nisl. Ut rutrum fringilla
                    aliquet. Pellentesque auctor vehicula malesuada. Aliquam id feugiat
                    sem, sit amet tempor nulla. Quisque fermentum felis faucibus, vehicula
                    metus ac, interdum nibh. Curabitur vitae convallis ligula. Integer ac
                    enim vel felis pharetra laoreet. Interdum et malesuada fames ac ante
                    ipsum primis in faucibus. Pellentesque hendrerit ac augue quis
                    pretium.
                </p>
                <p>
                    Morbi ut scelerisque nibh. Integer auctor, massa non dictum tristique,
                    elit metus efficitur elit, ac pretium sapien nisl nec ante. In et ex
                    ultricies, mollis mi in, euismod dolor.
                </p>
                <p>Quisque convallis ligula non magna efficitur tincidunt.</p>
                <p>
                    Pellentesque id lacus pulvinar elit pulvinar pretium ac non urna.
                    Mauris id mauris vel arcu commodo venenatis. Aliquam eu risus arcu.
                    Proin sit amet lacus mollis, semper massa ut, rutrum mi.
                </p>
                <p>Sed sem nisi, luctus consequat ligula in, congue sodales nisl.</p>
                <p>
                    Vestibulum bibendum at erat sit amet pulvinar. Pellentesque pharetra
                    leo vitae tristique rutrum. Donec ut volutpat ante, ut suscipit leo.
                </p>
                <video autoPlay playsInline muted loop src={video3} width="750" height="500"></video>

                <h2>Sub-header</h2>
                <p>
                    Maecenas quis elementum nulla, in lacinia nisl. Ut rutrum fringilla
                    aliquet. Pellentesque auctor vehicula malesuada. Aliquam id feugiat
                    sem, sit amet tempor nulla. Quisque fermentum felis faucibus, vehicula
                    metus ac, interdum nibh. Curabitur vitae convallis ligula. Integer ac
                    enim vel felis pharetra laoreet. Interdum et malesuada fames ac ante
                    ipsum primis in faucibus. Pellentesque hendrerit ac augue quis
                    pretium.
                </p>
                <p>
                    Morbi ut scelerisque nibh. Integer auctor, massa non dictum tristique,
                    elit metus efficitur elit, ac pretium sapien nisl nec ante. In et ex
                    ultricies, mollis mi in, euismod dolor.
                </p>
                <p>Quisque convallis ligula non magna efficitur tincidunt.</p>
            </article>
        </>);
}
