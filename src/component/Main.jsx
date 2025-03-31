import React from "react";
import Profile_image from "../assets/photo/yoshi.jpg";
import Back_img from "../assets/photo/backimg.jpg";
import Card01 from "../assets/photo/img01.jpg";
import Card02 from "../assets/photo/card02.jpg";
import Card03 from "../assets/photo/img03.jpg";
import { FaInstagram } from "react-icons/fa"; //instagram icon
import { AiOutlineMail } from "react-icons/ai"; //mail icon
import { SiLine } from "react-icons/si"; //line icon
import { FaGlobe } from "react-icons/fa";
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
            吉田雅秀
            <br />
            年齢:27歳
            <br />
            仕事:
            <br />
            カイロプラクティック
            <br />
            NS代理店
            <br />
            ボディーメイクアドバイザー
            <br />
            <br />
            紹介文:
            <br />
            身体の筋肉や骨格へのケアに加え、インナーケアも得意としています。
            身体で起こっていることを理解し、一人一人に合った改善方法を提供しています
          </p>
        </div>
      </section>
      {/* 
      <section id="features" className="content-section">
        <div className="benifit">
          <h1 className="section-title">カイロプラクティックの特徴</h1>

          <div className="card-container">
            <div className="card">
              <img src={Card01} alt="Card Image" className="card-image" />
              <div className="card-content">
                <h1 className="card-title">
                  その場しのぎではなく、根本原因にアプローチ
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
                <h1 className="card-title">
                  身体全体のバランスを整え、自然な回復力を向上
                </h1>
                <p className="card-description">
                  骨格の歪みを調整し、神経の流れを正常化することで、自然治癒力を最大限に引き出します。
                  自然治癒力が高まると、治療の頻度を減らすことにつながり、
                  悩みに向き合う時間を減らすことができます。
                </p>
              </div>
            </div>

            <div className="card">
              <img src={Card03} alt="Card Image" className="card-image" />
              <div className="card-container">
                <h1 className="card-title">
                  身体の不調を早期発見！早期対策が可能！
                </h1>
                <p className="card-description">
                  施術を繰り返していくことで、身体の良い状態と悪い状態の違いに
                  気付きやすくなります。そのため、辛い症状が発生する前に、
                  身体のパフォーマンスが落ちる前に対策を打ちやすくなります。
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>*/}

      <section id="plan" className="content-section">
        <div className="course">
          <h1 className="section-title">コース一覧</h1>{" "}
          {/* Optional: Section Title */}
          <div className="card-container">
            <div className="card">
              <div className="card-content">
                <h1 className="card-title">30分コース</h1>
                <p className="card-description">
                  ほぐし＋カイロプラクティック
                  背骨周りを中心にほぐした後に矯正をします。
                </p>
              </div>
            </div>

            <div className="card">
              <div className="card-content">
                <h1 className="card-title">50分コース</h1>
                <p className="card-description">
                  ほぐし＋肩甲骨はがしカイロプラクティック
                  細かく全体的に筋肉をほぐしてから矯正をします。
                </p>
              </div>
            </div>

            <div className="card">
              <div className="card-content">
                <h1 className="card-title">ご自宅で本格施術！</h1>
                <p className="card-description0">出張コース 価格要相談</p>
                <p className="card-description01">
                  「忙しくて通えない…」「小さな子どもがいて外出が難しい…」
                  そんなあなたのために、ご自宅やオフィスでプロの
                  カイロプラクティック施術を受けられる出張コースをご用意しました。
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="content-section">
        <div className="social-icons">
          <a
            href="https://www.instagram.com/yoshida.kenko.masahide?igsh=eXhhbm9jMDN1YjRi&utm_source=qr"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram size={30} color="#E4405F" />
          </a>
          <a
            href="https://lin.ee/nAAgygl"
            target="_blank"
            rel="noopener noreferrer"
          >
            <SiLine size={30} color="#06C755" />
          </a>
          <a href="mailto:masahide1998115@gmail.com">
            <AiOutlineMail size={30} color="#D44638" />
          </a>
          <a
            href="https://peraichi.com/landing_pages/view/masachiropractic"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGlobe size={30} color="#4A90E2" />
          </a>
        </div>
      </section>
    </>
  );
}

export default Main;
