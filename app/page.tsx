"use client";

export default function Home() {
  return (
    <main className="home">

      <style jsx global>{`
        * {
          box-sizing: border-box;
        }

        html, body {
          margin: 0;
          padding: 0;
          background: #08090d;
          font-family: Arial, sans-serif;
        }

        .home {
          min-height: 100vh;
          background:
            radial-gradient(circle at 50% 35%, #29200e 0%, #0b0c11 38%, #08090d 75%);
          color: white;
          overflow: hidden;
          padding-bottom: 35px;
        }

        .header {
          max-width: 850px;
          margin: auto;
          padding: 25px 22px;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .brand {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .logo {
          width: 52px;
          height: 52px;
          border-radius: 15px;
          background: linear-gradient(135deg, #ffc400, #e87900);
          display: grid;
          place-items: center;
          font-size: 27px;
          box-shadow: 0 0 25px #ffae0040;
        }

        .brand h1 {
          font-size: 19px;
          margin: 0;
        }

        .brand h1 span {
          color: #ffbf35;
        }

        .brand p {
          font-size: 9px;
          color: #92929a;
          letter-spacing: 1.5px;
          margin-top: 5px;
        }

        .admin {
          border: 1px solid #a87932;
          color: #f4c66d;
          border-radius: 30px;
          padding: 9px 15px;
          font-size: 12px;
        }

        .hero {
          max-width: 650px;
          margin: auto;
          padding: 55px 22px 25px;
          text-align: center;
        }

        .globe-area {
          position: relative;
          width: 240px;
          height: 245px;
          margin: 0 auto 20px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .glow {
          position: absolute;
          width: 220px;
          height: 220px;
          background: #f5a900;
          filter: blur(85px);
          opacity: 0.18;
          border-radius: 50%;
        }

        .globe {
          position: relative;
          font-size: 135px;
          filter: sepia(1) saturate(2.5) hue-rotate(350deg)
            drop-shadow(0 0 20px #ffc13b);
          z-index: 2;
        }

        .platform {
          position: absolute;
          bottom: 17px;
          width: 185px;
          height: 27px;
          border: 2px solid #e9b94c;
          transform: perspective(100px) rotateX(35deg);
          background: linear-gradient(90deg, #49320b, #d49a24, #49320b);
          box-shadow: 0 0 25px #e9ae3670;
        }

        .badges {
          display: flex;
          justify-content: center;
          gap: 10px;
          flex-wrap: wrap;
          margin: 20px 0 30px;
        }

        .badge {
          background: #171c2c;
          border: 1px solid #353548;
          padding: 10px 16px;
          border-radius: 30px;
          font-size: 13px;
          color: #e8bd62;
        }

        .badge.gray {
          color: #ddd;
        }

        .title {
          font-size: clamp(34px, 8vw, 48px);
          font-weight: 900;
          line-height: 1.2;
          margin: 20px 0;
        }

        .title span {
          color: #ffb52e;
          background: linear-gradient(90deg, #ffe18a, #ff9e16);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .description {
          max-width: 530px;
          margin: 0 auto 38px;
          color: #a5a5b2;
          font-size: 17px;
          line-height: 1.7;
        }

        .buttons {
          max-width: 450px;
          margin: auto;
          display: grid;
          gap: 14px;
        }

        .btn {
          display: block;
          width: 100%;
          padding: 19px;
          border-radius: 40px;
          text-decoration: none;
          font-size: 17px;
          font-weight: bold;
          transition: 0.3s;
        }

        .login {
          color: #17100a;
          background: linear-gradient(100deg, #e9a900, #ffbd45);
          box-shadow: 0 0 30px #e5a32235;
        }

        .register {
          color: white;
          border: 1.5px solid #777783;
          background: transparent;
        }

        .btn:hover {
          transform: translateY(-3px);
        }

        .info {
          max-width: 600px;
          margin: 45px auto 0;
          padding: 25px;
          border-radius: 25px;
          background: #111629;
          border: 1px solid #514124;
          text-align: left;
          box-shadow: 0 10px 35px #0005;
        }

        .info h3 {
          color: #ffbd45;
          margin-top: 0;
          font-size: 18px;
        }

        .info p {
          color: #c0c0ca;
          font-size: 14px;
          line-height: 1.8;
        }

        footer {
          text-align: center;
          color: #686875;
          font-size: 12px;
          margin-top: 45px;
        }

        @media (max-width: 480px) {
          .header {
            padding: 18px 15px;
          }

          .brand h1 {
            font-size: 16px;
          }

          .admin {
            font-size: 10
