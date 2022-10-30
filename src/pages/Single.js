import React from 'react';
import Edit from '../img/edit.png';
import Delete from '../img/delete.png';
import { Link } from 'react-router-dom';
import Menu from '../components/Menu';

const Single = () => {
  return (
    <div className="single">
      <div className="content">
        <img
          src="https://www.organicbook.com/wp-content/uploads/2019/03/เรียกคืนความสุขกลับมาให้ชีวิต-1-730x430.jpg"
          // src="https://images.pexels.com/photos/949587/pexels-photo-949587.jpeg?cs=srgb&dl=pexels-rovenimagescom-949587.jpg"
          // src="https://images.pexels.com/photos/403571/pexels-photo-403571.jpeg?cs=srgb&dl=pexels-scott-webb-403571"
          alt=""
        />
        <div className="user">
          <img
            src="https://res.cloudinary.com/dwqidrcfo/image/upload/v1649064726/xsr72d4rd50oxgmjyivw.jpg"
            // src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt=""
          />
          <div className="info">
            <span>SaMe</span>
            <p>Posted 2 days ago</p>
          </div>
          <div className="edit">
            <Link to={`/write?edit=2`}>
              <img src={Edit} alt="" />
            </Link>
            <img src={Delete} alt="" />
          </div>
        </div>
        <h1>Blog</h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam nemo
          quae nisi eum cum. Illo quod fugit nemo voluptate, accusamus
          repudiandae neque? Nesciunt perspiciatis amet quo eveniet nostrum iste
          fugiat dolorum unde repellendus officia doloremque ipsum, accusamus
          <br />
          <br />
          cupiditate assumenda dolor veritatis commodi ad minus aut nobis.
          Corrupti qui necessitatibus, suscipit voluptate voluptatum repellendus
          fugit sequi nam obcaecati quo mollitia nobis quibusdam voluptas
          reiciendis velit aut veritatis! Corrupti tempora rerum doloribus fugit
          <br />
          <br />
          voluptatum, consequatur quis illo tempora rerum doloribus fugit
          voluptatum, consequatur quis illo tempora rerum doloribus fugit
          voluptatum, consequatur quis illo tempora rerum doloribus fugit
          voluptatum, consequatur quis illo tempora rerum doloribus fugit
          voluptatum, consequatur quis illo vitae quia nam, quo obcaecati in.
          Temporibus officia culpa, dolorum, cumque molestiae neque amet, quae
          ea voluptatem dolorem architecto possimus? Iure animi rem facere
          quasi? Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut
          sed,
          <br />
          <br />
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae
          commodi dolorum doloremque ratione aperiam cupiditate aliquam? Magnam
          impedit laboriosam ratione quia corporis, amet aliquid error est
          reprehenderit, sapiente repudiandae, hic deserunt deleniti eaque
          voluptatem minus omnis ut necessitatibus accusamus provident
          cupiditate! Repellendus fugit labore fuga laudantium? Quidem
          asperiores placeat pariatur maxime nesciunt quo enim voluptatum
          quibusdam nisi, mollitia molestiae adipisci maiores eos dolores
          obcaecati, omnis nam sit magnam tenetur inventore laborum, sequi
          molestias saepe quasi. Accusantium molestiae libero beatae nesciunt
          perspiciatis optio sed iusto! Temporibus, ipsa nobis voluptatem optio
          labore id tempora nulla ab deleniti, ad asperiores officia facilis
          aliquam excepturi dolorem incidunt nesciunt modi omnis quidem culpa,
          dolor fugiat tempore. Ducimus nesciunt, voluptatum deleniti aperiam
          dolorem, accusantium molestiae amet ad aspernatur adipisci similique a
          fuga fugiat esse quia rerum consectetur. Explicabo, cumque illum ex
          nemo perspiciatis quaerat adipisci
        </p>
      </div>
      <Menu />
    </div>
  );
};

export default Single;
