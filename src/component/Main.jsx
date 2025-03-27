import React from "react";
import Profile_image from "../assets/photo/yoshi.jpg";
import Back_img from "../assets/photo/backimg.jpg";
import Card01 from "../assets/photo/img01.jpg";
import Card02 from "../assets/photo/card02.jpg";
import "./Main.css";

function Main() {
  return (
    <>
      <section id="bg-img">
        <div className="overlay-text">
          <h1>あなたの不調、根本からケアします</h1>
        </div>
      </section>

      <section id="about" className="content-section">
        <img src={Profile_image} />
        <div className="about-text">
          <h1>自己紹介</h1>
          <p>
            身体の筋肉や骨格へのケアに加え、インナーケアも得意としています。身体で起こっていることを理解し、
            一人一人に合った改善方法を提供しています。
            「世の中にある怪我や病気を１つでも多く減らしたい」——その想いが、私の原動力です。
            神奈川県出身。幼少期から野球に打ち込み、15年間プレーを続ける中でプロを目指しトライアウトにも挑戦。
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

      <section id="features" className="content-section">
        <div className="ex">
          <h1>カイロプラクティックとは？</h1>
          <p>
            カイロプラクティックは、背骨や骨盤の歪みを矯正し、体の不調を改善する手技療法です。
            主に手技を使って関節や筋肉のバランスを整え、神経の働きを良くするのが特徴。腰痛や肩こり、
            頭痛などの症状にアプローチするだけでなく、健康維持や予防にも活用されます。
            また、筋骨格系の障害と健康の関係を診断・治療・予防することを目的としています。
          </p>
        </div>
        <div className="benifit">
          <h1>カイロプラクティックの特徴</h1>
          <div className="card">
            <img src={Card01} alt="Card Image" className="card-image" />
            <div className="card-content">
              <h1 className="card-title">
                その場しのぎではなく、根本原因にアプローチ一
              </h1>
              <p className="card-description">
              多くの整体やマッサージは、痛みなどの症状の部位に直接アプローチをする対処療法です。
              こういった施術の効果は一時的で、すぐに元に戻ってしまいます。
              カイロプラティックは、一時的な症状の緩和ではなく、
              症状の原因である「※神経の圧迫」にアプローチし、根本から健康な身体へ導きます。
              </p>
            </div>
          </div>
          
          <div className="card">
            <img src={Card02} alt="Card Image" className="card-image" />
            <div className="card-content">
              <h1 className="card-title">身体全体のバランスを整え、自然な回復力を向上</h1>
              <p className="card-description">
              骨格の歪みを調整し、神経の流れを正常化することで、自然治癒力を最大限に引き出します。
              自然治癒力が高まると、治療の頻度を減らすことにつながり、
              悩みに向き合う時間を減らすことができます。
              </p>
            </div>
          </div>
        </div>

        <div className="card">
          
        </div>
      </section>

      <section id="plans" className="content-section"></section>
    </>
  );
}

export default Main;
