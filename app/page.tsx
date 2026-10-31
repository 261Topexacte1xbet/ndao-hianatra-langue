export default function Home() {
  return (
    <>
      <style>{`
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
          color: white;
          background:
            radial-gradient(ellipse at 50% 35%, #30230b 0%, #101016 45%, #08090d 100%);
          overflow: hidden;
          padding-bottom: 35px;
        }

        .header {
          max-width: 850px;
          margin: auto;
          padding: 22px;
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
        }

        .admin {
          color: #f4c66d;
          border: 1px solid #a87932;
          border-radius: 30px;
          padding: 9px 13px;
          font-size: 12px;
        }

        .hero {
          max-width: 650px;
          margin: auto;
          padding: 35px 22px;
          text-align: center;
        }

        .globe-area {
          position: relative;
          height: 245px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 20px;
        }

        .glow {
          position: absolute;
          width: 200px;
          height: 200px;
          background: #ffb000;
          filter: blur(85px);
          opacity: .25;
          border-radius: 50%;
        }

        .globe {
          position: relative;
          z-index: 2;
          font-size: 130px;
          filter: drop-shadow(0 0 25px #ffbd45);
        }

        .platform {
          position: absolute;
          bottom: 15px;
          width: 185px;
          height: 28px;
          border: 2px solid #e9b94c;
          transform: perspective(100px) rotateX(35deg);
          background: linear-gradient(90deg, #49320b, #d49a24, #49320b);
          box-shadow: 0 0 25px #e9ae3670;
        }

        .badges {
          display: flex;
          justify-content: center;
          flex-wrap: wrap;
          gap: 10px;
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

        .gray {
          color: #ddd;
        }

        .title {
          font-size: clamp(34px, 8vw, 48px);
          font-weight: 900;
          line-height: 1.2;
          margin: 20px 0;
        }

        .title span {
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
          transition: .3s;
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
          margin-top: 40px;
        }

        @media(max-width: 480px) {
          .header {
            padding: 18px 14px;
          }

          .brand h1 {
            font-size: 15px;
          }

          .admin {
            font-size: 10px;
            padding: 7px;
          }

          .hero {
            padding-top: 30px;
          }

          .globe {
            font-size: 115px;
          }

          .description {
            font-size: 15px;
          }

          .info {
            margin: 35px 15px 0;
            padding: 20px;
          }
        }
      `}</style>

      <main className="home">

        <header className="header">
          <div className="brand">
            <div className="logo">🌍</div>

            <div>
              <h1>
                Ndao Hianatra <span>Langue</span>
              </h1>
              <p>ÉCOSYSTÈME D'APPRENTISSAGE 2026</p>
            </div>
          </div>

          <div className="admin">👤 Admin</div>
        </header>

        <section className="hero">

          <div className="globe-area">
            <div className="glow"></div>
            <div className="globe">🌍</div>
            <div className="platform"></div>
          </div>

          <div className="badges">
            <div className="badge">
              🎓 Formation Multilingue
            </div>

            <div className="badge gray">
              🏆 Édition 2026
            </div>
          </div>

          <h2 className="title">
            Bienvenue sur
            <br />
            <span>Ndao Hianatra</span>
          </h2>

          <p className="description">
            Accédez à vos cours interactifs et perfectionnez
            votre niveau dès aujourd'hui.
          </p>

          <div className="buttons">
            <a href="/login" className="btn login">
              Se connecter →
            </a>

            <a href="/register" className="btn register">
              S'inscrire
            </a>
          </div>

          <div className="info">
            <h3>🎯 Ny Tanjon'ny Application</h3>

            <p>
              Natsangana ity sehatra ity mba hanampiana sy
              hitarahana ireo olona mbola sahirana na mbola tsy
              mahay mamolaka ny fiteny vahiny ary ny firesahana
              an-davan'andro.
            </p>

            <p>
              Fampianarana mora idirana, azo ampiharina ary
              hatrany mba hahafahanao miteny am-pahatokiana.
            </p>
          </div>

        </section>

        <footer>
          © 2026 Ndao Hianatra Langue. Tous droits réservés.
        </footer>

      </main>
    </>
  );
      }
