import React from "react";
import Profile_image from "../assets/photo/yoshi.jpg";
import Back_img from "../assets/photo/backimg.jpg";
import "./Main.css";

function Main() {
  return (
    <>
      <section id="bg-img">
        <div className="overlay-text">
          <h1>Welcome to My Website</h1>
          <p>
            This is an example of using gradient overlays on background images
          </p>
        </div>
      </section>

      <section id="about" className="content-section">
        <img src={Profile_image} />
        <div className="about-text">
          <h1>自己紹介</h1>
          <p>
            身体の筋肉や骨格へのケアに加え、インナーケアも得意としています。身体で起こっていることを理解し、
            一人一人に合った改善方法を提供しています。
            「世の中にある怪我や病気を１つでも多く減らしたい」——
            その想いが、私の原動力です。
            神奈川県出身。幼少期から野球に打ち込み、15年間プレーを続ける中でプロを目指しトライアウトにも挑戦。
            <br />
            しかし、夢半ばで挫折を経験しました。この出来事をきっかけに、「選手を支える側として貢献したい」と考え、
            カイロプラクティックの道へ進みました。
            <br />
            さらに、身内の不幸を経験したことで、健康の大切さを改めて痛感。「病気や怪我は、未然に防ぐことができる」そう確信し、
            予防と根本改善を軸とした施術に取り組むようになりました。
            これまで3,000件以上の施術を行い、多くの方の身体の不調と向き合ってきました。
            私のミッションは、「世の中にある怪我や病気を１つでも多く減らすこと」。
            そのために、一時的なケアではなく、根本からの改善を目指し、
            皆様の健康を支える施術を提供し続けています。
          </p>
        </div>
      </section>

      <section id="plans" className="content-section"></section>
    </>
  );
}

export default Main;
