# Ndao Hianatra Langue — starter project

Ity dia **starter app** azo tohizana sy apetraka amin'ny hosting. Tafiditra ao ny pejy fandraisana, fisoratana anarana/fidirana amin'ny Supabase, dashboard lesona, fangatahana Premium amin'ny Orange Money/MVola (fanamarinana tanana), pejy admin ho an'ny fanamarinana, ary API route ho an'ny bot AI.

**Zava-dehibe:** tsy mbola production-ready tanteraka ity. Tsy mbola misy automatique Orange Money/MVola, tsy mbola nisy laharan'ny fandoavana napetraka, ary tsy maintsy apetraka ny Supabase sy ny OpenAI API key. Aza mandefa PIN, OTP, na tenimiafinao amin'olona.

## 1. Zavatra ilaina
- Kaonty GitHub
- Kaonty Supabase (base de données sy authentication)
- Kaonty Vercel (hosting)
- OpenAI API key raha tianao hiasa ny bot AI (mety hisy sarany arakaraka ny fampiasana)

## 2. Mamorona ny database
1. Midira amin'ny Supabase ary mamoròna project vaovao.
2. Sokafy ny **SQL Editor**.
3. Adikao ao ny votoatin'ny `supabase_schema.sql`, dia tsindrio Run.
4. Ao amin'ny **Authentication > URL Configuration**, apetraho ny URL rehefa efa manana Vercel URL ianao. Mandritra ny test dia ampio koa ny URL localhost raha ilaina.
5. Ao amin'ny **Project Settings > API**, alao ny Project URL sy anon/public key. Ampiasao ireo amin'ny environment variables. **Aza mampiasa service-role key ao amin'ny browser na alefa amin'ny olona.**

## 3. Apetraho ny project amin'ny GitHub
1. Mamoròna repository vaovao ao amin'ny GitHub, ohatra `ndao-hianatra-langue`.
2. Ampidiro ao ny rakitra rehetra ao anatin'ity folder ity. Raha finday Android ihany no ampiasaina, azo atao amin'ny navigateur GitHub ny mampakatra rakitra, saingy mety ho mora kokoa amin'ny ordinatera.
3. Ataovy azo antoka fa tafiditra ny `app/`, `lib/`, `package.json`, `tsconfig.json`, `supabase_schema.sql`, ary `.env.example`.

## 4. Apetraho amin'ny Vercel
1. Midira ao amin'ny Vercel ary safidio **Add New Project**.
2. Ampifandraiso amin'ilay GitHub repository.
3. Framework dia tokony ho fantatra ho Next.js ho azy.
4. Ao amin'ny **Environment Variables**, ampio ireto:
   - `NEXT_PUBLIC_SUPABASE_URL` = Project URL avy amin'ny Supabase
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY` = anon/public key avy amin'ny Supabase
   - `OPENAI_API_KEY` = OpenAI API key (raha ampiasaina ny AI)
   - `NEXT_PUBLIC_ORANGE_MONEY_NUMBER` = laharana Orange Money tianao hampiasaina
   - `NEXT_PUBLIC_MVOLA_NUMBER` = laharana MVola tianao hampiasaina
   - `NEXT_PUBLIC_SITE_URL` = Vercel URL
5. Tsindrio **Deploy**. Rehefa vita dia homena URL `*.vercel.app` ianao.

## 5. Ataovy administrateur ny kaontinao
1. Rehefa avy nampidirina tao amin'ny Supabase ny SQL, sokafy ny tranonkala ary misorata anarana amin'ny mailakao.
2. Ao amin'ny Supabase > Table Editor > `profiles`, tadiavo ny row mifanaraka amin'ny kaontinao.
3. Ovay ho `admin` ny `role` an'io row io. Aza ovaina ho admin ny kaontin'olon-kafa raha tsy tompon'andraikitra izy.
4. Midira amin'ny `https://NY-URL-NAO.vercel.app/admin` mba hijery sy hanamarina ny fangatahana fandoavam-bola.

## 6. Fandoavam-bola amin'ny voalohany
- Soloy amin'ny laharana tena izy ireo environment variables Orange Money sy MVola.
- Rehefa mandefa fangatahana ny mpampiasa dia miseho ao amin'ny dashboard admin ny référence.
- Hamarino amin'ny kaontinao/transaction tena izy ilay vola vao hankatoavy. **Aza matoky screenshot irery raha tsy hita ao amin'ny transaction history-nao ny vola.**
- Airtel Money dia tsy aseho ho fomba fandoavana amin'ity version ity satria mbola tsy vonona.
- Tsy misy integration automatique amin'ny operator amin'izao version izao.

## 7. Bot AI
- Mamoròna API key amin'ny kaonty OpenAI anao ary apetraho ho `OPENAI_API_KEY` ao amin'ny Vercel environment variables.
- Aza apetraka amin'ny `NEXT_PUBLIC_...` ny API key.
- Mety hisy sarany amin'ny fampiasana ny API. Apetraho ny usage limit/budget ao amin'ny dashboard provider-nao.

## 8. Fanamarihana momba ny Premium
Ny pejy admin amin'ity starter version ity dia manova ny status ho approved/rejected. Alohan'ny hanombohana mandray mpanjifa tena izy dia tokony hohatsaraina ny fitantanana ny daty fahataperan'ny Premium, ny logs, ny fiarovana amin'ny fangatahana miverimberina, ny fiarovana ny sary/porofo, ny privacy policy, ny terms of service, ny backup, ary ny fitsapana. Aza manao dokambarotra hoe efa mandeha ny fandoavam-bola automatique.

## 9. Fampandehanana amin'ny ordinatera (raha misy)
```bash
npm install
cp .env.example .env.local
npm run dev
```
Avy eo sokafy `http://localhost:3000`.

## 10. Olana mahazatra
- Raha milaza fa tsy misy Supabase environment variables: ampio ao amin'ny Vercel ary avereno Deploy.
- Raha tsy tonga ny mailaka fanamafisana: jereo ny spam ary ny Supabase Auth settings.
- Raha tsy miseho ny lesona: jereo raha efa Run ny `supabase_schema.sql`.
- Raha tsy mamaly ny AI: jereo ny `OPENAI_API_KEY` sy ny usage/billing.
- Raha tsy mahazo miditra amin'ny `/admin`: mila ovaina ho `admin` ao amin'ny `profiles` ny role-nao.
