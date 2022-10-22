import React from 'react';
import '../../App.css';
import ScrollToTop from '../../Reusable/ScrollToTop';


const Privacypolicy = () => {

  return (

    <>

    <ScrollToTop />

    <div className="flex flex-col w-[80%] text-left justify-center items-center mx-auto">

      <h1 className="my-8 Brevia700 text-5xl text-[#00B27A]">Informativa Privacy e Cookie</h1>
      
      <p>

        Lo scopo del presente documento è di informare la persona fisica
        (di seguito <span className="font-bold">“Interessato”</span>) relativamente al trattamento dei suoi dati
        personali (di seguito <span className="font-bold">“Dati Personali”</span>) raccolti dal titolare del trattamento,
        aiGoT S.r.l., con sede legale in Via Visconti di Modrone 38, 20122 Milano,
        CF/Partita IVA 11498080966, indirizzo email privacy@aigot.com, indirizzo PEC
        aigot@pec.it, telefono 0500985159, (di seguito <span className="font-bold">“Titolare”</span>), tramite il sito web
        %PUBLIC_URL% (di seguito <span className="font-bold">“Applicazione”</span>).

      </p>

      <br/>

      <p>

        Le modifiche e gli aggiornamenti saranno vincolanti non appena pubblicati sull’Applicazione.
        In caso di mancata accettazione delle modifiche apportate all’Informativa Privacy, l’Interessato
        è tenuto a cessare l’utilizzo di questa Applicazione e può richiedere al Titolare di cancellare i propri Dati Personali.

      </p>

      <br/>

      <div className="flex flex-col" >

        <ol className="list-decimal">

          <div className="flex flex-row ml-4 mb-2">

            <p className="mr-2 font-bold">1.</p><span className="font-bold">Categorie di Dati Personali trattati</span>

          </div>

          <p className="ml-10 mb-2">Il Titolare tratta le seguenti tipologie di Dati Personali forniti volontariamente dall’Interessato:</p>

          <ul className="flex flex-col list-disc gap-y-4" id="cookie">

            <li className="flex flex-row ml-10"><p className="mr-4 font-bold">•</p><p><span className="font-bold">Dati di contatto:</span> nome, cognome, indirizzo, e-mail, telefono, immagini, credenziali di autenticazione, eventuali ulteriori informazioni inviate dall'Interessato, etc.</p></li>

            <li className="flex flex-row ml-10"><p className="mr-4 font-bold">•</p><p><span className="font-bold">Dati fiscali e di pagamento:</span> codice fiscale, partita IVA, dati della carta di credito, estremi del conto corrente bancario, etc.</p></li>

            <p className="ml-10 my-2">Il Titolare tratta le seguenti tipologie di Dati Personali raccolti in maniera automatizzata:</p>

            <li className="flex flex-row ml-10"><p className="mr-4 font-bold">•</p><p><span className="font-bold">Dati tecnici:</span> Dati Personali prodotti dai dispositivi, dalle applicazioni, dagli strumenti e dai protocolli utilizzati, quali ad esempio, informazioni sul dispositivo utilizzato, indirizzi IP, tipo di browser, tipo di provider Internet (ISP). Tali Dati Personali possono lasciare tracce che, in particolare se combinate con identificativi univoci e altre informazioni ricevute dai server, possono essere utilizzate per creare profili delle persone fisiche</p></li>

            <li className="flex flex-row ml-10"><p className="mr-4 font-bold">•</p><p><span className="font-bold">Dati di navigazione e di utilizzo dell’Applicazione:</span> quali, ad esempio, pagine visitate, numero di clic, azioni compiute, durata delle sessioni, etc.</p></li>

            <li className="flex flex-row ml-10"><p className="mr-4 font-bold">•</p><p><span className="font-bold">Dati relativi alla posizione esatta dell’Interessato:</span> ad esempio, dati di geolocalizzazione che identificano in modo preciso la posizione dell’Interessato che possono essere raccolti tramite la rete satellitare (es. GPS) e altri mezzi, raccolti previo consenso dell’Interessato. L’Interessato può revocare il consenso in qualsiasi momento.</p></li>

          </ul>

          <p className="ml-10 my-2">Il mancato conferimento da parte dell’Interessato dei Dati Personali per i quali sussiste l’obbligo legale, contrattuale o qualora costituiscano requisito necessario per la conclusione del contratto con il Titolare, comporterà l’impossibilità del Titolare di instaurare o proseguire il rapporto con l’Interessato.</p>

          <p className="ml-10 mb-2">L’Interessato che comunichi al Titolare Dati Personali di terzi è direttamente ed esclusivamente responsabile della loro provenienza, raccolta, trattamento, comunicazione o diffusione.</p>

        </ol>

      </div>

      <br/>

      <div className="flex flex-col ">

        <ol className="list-decimal">

          <div className="flex flex-row ml-4 mb-2">

            <p className="mr-2 font-bold">2.</p><span className="font-bold">Cookie e tecnologie simili</span>

          </div>

          <p className="ml-10 mb-2"> L'Applicazione usa cookie, web beacon, identificatori univoci e altre analoghe tecnologie per raccogliere Dati Personali dell’Interessato sulle pagine, sui collegamenti visitati e sulle altre azioni che si eseguono quando l’Interessato utilizza l’Applicazione. Essi vengono memorizzati per essere poi trasmessi alla successiva visita dell'Interessato.</p>

        </ol>

      </div>

      <br/>

      <div className="flex flex-col">

        <ol className="list-decimal">

          <div className="flex flex-row ml-4 mb-2">

            <p className="mr-2 font-bold">3.</p><span className="font-bold">Base giuridica e finalità del trattamento</span>

          </div>

          <p className="ml-10 mb-2">Il trattamento dei Dati Personali è necessario:</p>

          <ul className="flex flex-col list-disc">

            <li className="flex flex-row ml-14"><p className="mr-4 font-bold">•</p><p>per l'esecuzione del contratto con l’Interessato e precisamente:</p></li>

          </ul>

          <ol className="flex flex-col list-decimal gap-y-4">

            <li className="flex flex-row ml-20 mt-4"><p className="mr-4 font-bold">1.</p><p><span className="font-bold">adempimento di ogni obbligo derivante dal rapporto precontrattuale o contrattuale con l’Interessato</span></p></li>

            <li className="flex flex-row ml-20"><p className="mr-4 font-bold">2.</p><p><span className="font-bold">registrazione e autenticazione dell’Interessato:</span> per consentire all’Interessato di registrarsi sull’Applicazione, accedere e essere identificato anche tramite piattaforme esterne</p></li>

            <li className="flex flex-row ml-20"><p className="mr-4 font-bold">3.</p><p><span className="font-bold">supporto e contatto con l’Interessato:</span> per rispondere alle richieste dell’Interessato </p></li>

            <li className="flex flex-row ml-20"><p className="mr-4 font-bold">4.</p><p><span className="font-bold">gestione dei pagamenti:</span> per gestire i pagamenti tramite carta di credito, bonifico bancario o altri strumenti</p></li>

          </ol>

          <ul className="flex flex-col list-disc">

            <li className="flex flex-row ml-14 mt-4"><p className="mr-4 font-bold">•</p><p>per obbligo di legge e precisamente:</p></li>

          </ul>

          <ol className="flex flex-col list-decimal">

            <li className="flex flex-row ml-20 mt-4"><p className="mr-4 font-bold">5.</p><p><span className="font-bold">l’adempimento di qualunque obbligo previsto dalle vigenti normative,</span>leggi e regolamenti, in particolare, in materia tributaria e fiscale</p></li>

          </ol>

          <ul className="flex flex-col list-disc">

            <li className="flex flex-row ml-14 mt-4"><p className="mr-4 font-bold">•</p><p>sulla base del legittimo interesse del Titolare, per:</p></li>

          </ul>

          <ol className="flex flex-col list-decimal gap-y-4">

            <li className="flex flex-row ml-20 mt-4"><p className="mr-4 font-bold">6.</p><p><span className="font-bold">finalità di marketing via email di prodotti e/o servizi del titolare</span>per vendere direttamente i prodotti o servizi del Titolare utilizzando l’e-mail fornita dall’Interessato nel contesto della vendita di un prodotto o servizio analogo a quello oggetto della vendita</p></li>

            <li className="flex flex-row ml-20"><p className="mr-4 font-bold">7.</p><p><span className="font-bold">gestione, ottimizzazione e monitoraggio dell’infrastruttura tecnica:</span>per identificare e risolvere eventuali problemi tecnici, per migliorare le performance dell’Applicazione, per gestire e organizzare le informazioni in un sistema informatico (es. server, database, etc.)</p></li>

            <li className="flex flex-row ml-20"><p className="mr-4 font-bold">8.</p><p><span className="font-bold">sicurezza e antifrode:</span> per garantire la sicurezza del patrimonio, delle infrastrutture e delle reti del Titolare</p></li>

            <li className="flex flex-row ml-20"><p className="mr-4 font-bold">9.</p><p><span className="font-bold">statistica con dati anonimi:</span> per effettuare analisi statistiche su dati aggregati e anonimi per analizzare i comportamenti dell’Interessato, per migliorare i prodotti e/o i servizi forniti dal Titolare e meglio soddisfare le aspettative dell’Interessato</p></li>

          </ol>

          <ul className="flex flex-col list-disc">

            <li className="flex flex-row ml-14 mt-4"><p className="mr-4 font-bold">•</p><p>sulla base del consenso dell’Interessato, per:</p></li>

          </ul>

          <ol className="flex flex-col list-decimal gap-y-4">

            <li className="flex flex-row ml-20 mt-4"><p className="mr-4 font-bold">10.</p><p><span className="font-bold">profilazione dell’Interessato per fini di marketing:</span>per fornire all’Interessato informazioni sui prodotti e/o servizi del Titolare attraverso un trattamento automatizzato finalizzato alla raccolta di informazioni personali con lo scopo di prevedere o valutare le sue preferenze o comportamenti</p></li>

            <li className="flex flex-row ml-20"><p className="mr-4 font-bold">11.</p><p><span className="font-bold">retargeting e remarketing:</span>per raggiungere con un annuncio pubblicitario personalizzato l’Interessato che ha già visitato o ha dimostrato interesse per i prodotti e/o servizi offerti dall'Applicazione utilizzando i suoi Dati Personali. L'Interessato può effettuare l’opt-out visitando la pagina della <a href="https://optout.networkadvertising.org/?c=1" className="text-[#00B27A] underline">Network Advertising Initiative</a> </p></li>

            <li className="flex flex-row ml-20"><p className="mr-4 font-bold">12.</p><p><span className="font-bold">finalità di marketing di prodotti e/o servizi del Titolare:</span> per inviare informazioni o materiali commerciali e/o promozionali, per effettuare attività di vendita diretta di prodotti e/o servizi del Titolare o per compiere ricerche di mercato con modalità automatizzate e tradizionali</p></li>

            <li className="flex flex-row ml-20"><p className="mr-4 font-bold">13.</p><p><span className="font-bold">finalità di marketing di prodotti e/o servizi di terzi:</span> per inviare informazioni o materiali commerciali e/o promozionali di terzi, per effettuare attività di vendita diretta o per compiere ricerche di mercato dei loro prodotti e/o servizi con modalità automatizzate e tradizionali </p></li>

            <li className="flex flex-row ml-20"><p className="mr-4 font-bold">14.</p><p><span className="font-bold">comunicazione dei Dati Personali per finalità di marketing di terzi:</span> per comunicare a terzi che operano nel settore Ristorazione (digital marketing) i Dati Personali affinché li utilizzino per inviare loro informazioni o materiali commerciali e/o promozionali o per effettuare attività di vendita diretta dei loro prodotti e/o servizi o per compiere ricerche di mercato con modalità automatizzate e tradizionali </p></li>

            <li className="flex flex-row ml-20"><p className="mr-4 font-bold">15.</p><p><span className="font-bold">rilevazione della posizione esatta dell’Interessato:</span>per rilevare la presenza dell'Interessato, per controllare gli accessi, gli orari e la presenza dell'Interessato in un determinato luogo, etc.</p></li>

          </ol>

          <p className="ml-10 mb-2 mt-4">

          Sulla base del legittimo interesse del Titolare, l’Applicazione permette di effettuare interazioni con
          piattaforme esterne o social network il cui trattamento dei Dati Personali è regolato dalle rispettive informative privacy alle
          quali si prega di fare riferimento. Le interazioni e le informazioni acquisite da questa Applicazione sono in ogni caso soggette
          alle impostazioni privacy che l’Interessato ha scelto su tali piattaforme o social network. Queste informazioni – in assenza di
          un specifico consenso al trattamento per ulteriori finalità – vengono utilizzate al solo fine di consentire la fruizione dell’Applicazione
          e fornire le informazioni e i servizi richiesti.

          </p>

          <p className="ml-10 mb-2 mt-4">

          I Dati Personali dell'Interessato possono inoltre essere utilizzati dal
          Titolare per tutelarsi in giudizio avanti le sedi giudiziarie competenti.

          </p>

        </ol>

      </div>

      <br/>

      <div className="flex flex-col">

        <ol className="list-decimal">

          <div className="flex flex-row ml-4 mb-2">

           <p className="mr-2 font-bold">4.</p><span className="font-bold">Modalità di trattamento e destinatari dei Dati Personali</span>

          </div>

          <p className="ml-10 mb-2"> Il trattamento dei Dati Personali viene effettuato mediante strumenti cartacei e informatici con modalità organizzative e con logiche strettamente correlate alle finalità indicate e mediante l'adozione di adeguate misure di sicurezza.</p>

          <p className="ml-10 mb-4"> I Dati Personali sono trattati esclusivamente da:</p>

        </ol>

        <ul className="flex flex-col list-disc gap-y-4">

          <li className="flex flex-row ml-10"><p className="mr-4 font-bold">•</p><p>persone autorizzate dal Titolare del trattamento dei Dati Personali che si sono impegnate alla riservatezza o abbiano un adeguato obbligo legale di riservatezza;</p></li>

          <li className="flex flex-row ml-10"><p className="mr-4 font-bold">•</p>

            <p>

              soggetti che operano in autonomia come distinti titolari del trattamento o da soggetti designati quali

              responsabili del trattamento dal Titolare al fine di svolgere tutte le attività di trattamento necessarie a perseguire le finalità di cui alla presente informativa (ad esempio, partner commerciali, consulenti, società informatiche, fornitori di servizi, hosting provider);

              soggetti o enti a cui è obbligatorio comunicare i Dati Personali per obbligo di legge o per ordine delle autorità.

            </p>

          </li>

          <p className="ml-10 my-2">I soggetti sopra elencati sono tenuti a utilizzare le garanzie appropriate per proteggere i Dati Personali e possono accedere solo a quelli necessari per eseguire i compiti a loro assegnati.</p>

          <p className="ml-10 my-2">I Dati Personali non verranno diffusi indiscriminatamente in alcun modo.</p>

        </ul>

      </div>

      <br/>

      <div className="flex flex-col self-start">

        <ol className="list-decimal">

          <div className="flex flex-row ml-4 mb-2">

            <p className="mr-2 font-bold">5.</p><span className="font-bold">Luogo</span>

          </div>

          <p className="ml-10 mb-2">I Dati Personali non saranno oggetto di alcun trasferimento al di fuori del territorio dello Spazio Economico Europeo (SEE).</p>

        </ol>

      </div>

      <br/>

      <div className="flex flex-col">

        <ol className="list-decimal">

          <div className="flex flex-row ml-4 mb-2">

            <p className="mr-2 font-bold">6.</p><span className="font-bold">Processi decisionali completamente automatizzati</span>

          </div>

          <p className="ml-10 mb-2">

            Il Titolare utilizza processi decisionali completamente automatizzati che possono produrre effetti
            giuridici per l’Interessato o incidere su di esso in modo significativo e che operano secondo questi
            criteri: Gestione automatizzata di

          </p>

        </ol>

        <ul className="flex flex-col list-disc">

          <li className="flex flex-row ml-10"><p className="mr-4">-</p>campagne marketing online<p></p></li>

          <li className="flex flex-row ml-10"><p className="mr-4">-</p>generazione testuale<p></p></li>

          <li className="flex flex-row ml-10"><p className="mr-4">-</p>generazione di contenuti grafici<p></p></li>

          <li className="flex flex-row ml-10"><p className="mr-4">-</p>attività di profilazione<p></p></li>

          <li className="flex flex-row ml-10"><p className="mr-4">-</p>generazione di sconti e promozioni<p></p></li>

          <li className="flex flex-row ml-10"><p className="mr-4">-</p>invio di e-mail a scopo commerciale<p></p></li>

          <li className="flex flex-row ml-10"><p className="mr-4">-</p>invio di e-mail a scopo tecnico<p></p></li>

          <li className="flex flex-row ml-10"><p className="mr-4">-</p>invio di notifiche<p></p></li>

          <li className="flex flex-row ml-10"><p className="mr-4">-</p>attività di pagamenti online<p></p></li>

          <li className="flex flex-row ml-10"><p className="mr-4">-</p>chatbot<p></p></li>

        </ul>

      </div>

      <br/>

      <div className="flex flex-col">

        <ol className="list-decimal">

          <div className="flex flex-row ml-4 mb-2">

           <p className="mr-2 font-bold">7.</p><span className="font-bold">Periodo di conservazione dei Dati Personali</span>

          </div>

          <p className="ml-10 mb-2"> I Dati Personali saranno conservati per il periodo di tempo necessario ad adempiere alle finalità per i quali sono stati raccolti, in particolare: </p>

        </ol>

        <ul className="flex flex-col list-disc gap-y-4">

          <li className="flex flex-row ml-10"><p className="mr-4 font-bold">•</p>

            <p>

              per finalità relative all’esecuzione del contratto tra il Titolare e l’Interessato, saranno conservati per
              tutta la durata del rapporto contrattuale e, dopo la cessazione, per il periodo di prescrizione ordinario
              pari a 10 anni. Nel caso di contenzioso giudiziale, per tutta la durata dello stesso, fino all’esaurimento
              dei termini di esperibilità delle azioni di impugnazione

            </p>

          </li>

          <li className="flex flex-row ml-10"><p className="mr-4 font-bold">•</p><p> per finalità relative al legittimo interesse del Titolare, saranno conservati fino al compimento di tale interesse</p></li>

          <li className="flex flex-row ml-10"><p className="mr-4 font-bold">•</p><p> per l’adempimento di un obbligo di legge, per ordine di un’autorità e per la tutela in giudizio, saranno conservati nel rispetto delle tempistiche previste da detti obblighi, normative e comunque sino al compimento del termine prescrizionale previsto dalle norme in vigore </p></li>

          <li className="flex flex-row ml-10"><p className="mr-4 font-bold">•</p><p> per finalità basate sul consenso dell’Interessato, saranno conservati sino alla revoca del consenso. Per finalità di marketing per un periodo non superiore a 24 mesi. </p></li>

          <p className="ml-10 my-2">Al termine del periodo di conservazione, tutti i Dati Personali saranno cancellati o conservati in una forma che non consenta l’identificazione dell’Interessato.</p>

        </ul>

      </div>

      <br/>

      <div className="flex flex-col">

        <ol className="list-decimal">

          <div className="flex flex-row ml-4 mb-2">

           <p className="mr-2 font-bold">8.</p><span className="font-bold">Diritti dell’Interessato</span>

          </div>

          <p className="ml-10 mb-2"> Gli Interessati possono esercitare determinati diritti con riferimento ai Dati Personali trattati dal Titolare. In particolare, l’Interessato ha il diritto di: </p>

        </ol>

        <ul className="flex flex-col list-disc">

          <li className="flex flex-row ml-10"><p className="mr-4 font-bold">•</p><p> essere informato sul trattamento dei propri Dati Personali</p></li>

          <li className="flex flex-row ml-10"><p className="mr-4 font-bold">•</p><p> revocare il consenso in ogni momento</p></li>

          <li className="flex flex-row ml-10"><p className="mr-4 font-bold">•</p><p> limitare il trattamento dei propri Dati Personali</p></li>

          <li className="flex flex-row ml-10"><p className="mr-4 font-bold">•</p><p> opporsi al trattamento dei propri Dati Personali</p></li>

          <li className="flex flex-row ml-10"><p className="mr-4 font-bold">•</p><p> accedere ai propri Dati Personali</p></li>

          <li className="flex flex-row ml-10"><p className="mr-4 font-bold">•</p><p> verificare e chiedere la rettifica dei propri Dati Personali</p></li>

          <li className="flex flex-row ml-10"><p className="mr-4 font-bold">•</p><p> ottenere la limitazione del trattamento dei propri Dati Personali</p></li>

          <li className="flex flex-row ml-10"><p className="mr-4 font-bold">•</p><p> ottenere la cancellazione dei propri Dati Personali</p></li>

          <li className="flex flex-row ml-10"><p className="mr-4 font-bold">•</p><p> trasferire i propri Dati Personali ad altro titolare</p></li>

          <li className="flex flex-row ml-10"><p className="mr-4 font-bold">•</p><p> proporre reclamo all’autorità di controllo della protezione dei propri Dati Personali e/o agire in sede giudiziale.</p></li>

          <p className="ml-10 my-2">Per esercitare i propri diritti, gli Interessati possono indirizzare una richiesta al seguente indirizzo e-mail privacy@aigot.com. Le richieste saranno prese in carico dal Titolare immediatamente ed evase nel più breve tempo possibile, in ogni caso entro 30 giorni.</p>

        </ul>

      </div>

      <br/>

      <div className="flex flex-col self-start">

        <ol className="list-decimal">

          <div className="flex flex-row ml-4 mb-2">

            <p className="mr-2 font-bold">9.</p><span className="font-bold">Responsabile della protezione dei Dati Personali</span>

          </div>

          <p className="ml-10 mb-2">Il Responsabile della protezione dei Dati Personali è Lorenzo Damiani, Via Francesco Chiusa 21, Codice Fiscale DMNLNZ91E17625W, indirizzo e-mail lorenzo.damiani@aigot.com .</p>

        </ol>

      </div>

      <br/>

      <p className="flex self-start mb-8"> Ultimo aggiornamento: 13/05/2022 </p>

    </div>

    </>

  )
}

export default Privacypolicy;
