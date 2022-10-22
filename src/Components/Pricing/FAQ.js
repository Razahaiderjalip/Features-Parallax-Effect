import React from 'react'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


function FAQ() {
    return (
        <>
            <div className='flex flex-col gap-y-4 my-3'>
                <Accordion className='shadow-none' style={{ borderTopWidth: 4, borderColor: "#E5E5E5", borderBottomWidth: 0, marginBottom: 10 }}>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
                        <p className="text-xl pop700">Che cos’è il credito pubblicitario? Come posso spenderlo?</p>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography className="pr-24">
                            Il credito pubblicitario consiste in un credito monetario spendibile per
                            fare campagne pubblicitarie online sulle piattaforme
                            social Facebook e Instagram,sul motore di ricerca Google e sulla
                            piattaforma Youtube.
                            La gestione e il lancio di queste campagne deve essere effettuato
                            all’interno della piattaforma Restaurants Club per beneficiare del
                            credito.  Il credito pubblicitario incluso nel tuo abbonamento
                            trimestrale deve essere speso sempre entro 30 giorni dalla data
                            di attivazione o di rinnovo del tuo abbonamento.
                            Se invece hai un abbonamento annuale, il credito deve essere sempre
                            speso entro trenta giorni dalla data di erogazione. Ti verrà erogato
                            il credito pubblicitario all’attivazione dell’abbonamento e poi ogni
                            tre mesi.


                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion className='shadow-none' style={{ borderTopWidth: 4, borderColor: "#E5E5E5", borderBottomWidth: 0, marginBottom: 10 }}>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
                        <p className="text-xl pop700">Quanto costa Restaurant Club?</p>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography className="pr-24 ">
                            Il costo di restaurant club varia in base a:<br />
                            1) Frequenza di pagamento (trimestrale o annuale)<br />
                            2)  Numero di pacchetti scelti
                            <table id="FAQ" className='w-2/3  mt-5 border-4 border-[#114653] sm:hidden xsm:hidden'>
                                <tr>
                                    <th className="Brevia700 text-center">Un singolo Pacchetto fra Express, Ready e Catch</th>
                                    <th className="Brevia700 text-center">Due pacchetti a scelta tra Express, Ready e Catch</th>
                                    <th className="Brevia700 text-center">Tutti e 3 i pacchetti</th>
                                </tr>
                                <tr>
                                    <td className="text-center"><span className='pop700'>250€ al mese</span> se pagato trimestralmente <span className='block mt-5'>incluso credito pubblicitario</span><span /> </td>
                                    <td className="text-center"><span className='pop700'>317€ al mese</span> se pagato trimestralmente <span className='block mt-5'>incluso credito pubblicitario</span><span /> </td>
                                    <td className="text-center"><span className='pop700'>375€ al mese</span> se pagato trimestralmente <span className='block mt-5'>incluso credito pubblicitario</span><span /> </td>
                                </tr>
                                <tr>
                                    <td className="text-center"><span className='pop700'>232,50€ al mese </span>se pagato annualmente <br /> 2790€ <span className="line-through">3000€</span>  all’anno<span className='block mt-5'>incluso credito pubblicitario</span><span /> </td>
                                    <td className="text-center"><span className='pop700'>288,17€ al mese </span>se pagato annualmente <br /> 3458€ <span className="line-through">3800€</span>  all’anno<span className='block mt-5'>incluso credito pubblicitario</span><span /> </td>
                                    <td className="text-center"><span className='pop700'>345 € al mese </span>se pagato annualmente <br /> 4140€ <span className="line-through">4800€</span>  all’anno<span className='block mt-5'>incluso credito pubblicitario</span><span /> </td>
                                </tr>
                            </table>
                            <table className='w-full lg:hidden xl:hidden md:hidden xmd:hidden mt-5 border-4 border-[#114653]'>
                                <tr>
                                    <th className="Brevia700 text-center">Due pacchetti a scelta tra Express, Ready e Catch</th>
                                </tr>
                                <tr>
                                    <td className="text-center"><span className='pop700'>317€ al mese</span> se pagato trimestralmente <span className='block mt-5'>incluso credito pubblicitario</span><span /> </td>
                                </tr>
                                <tr>
                                    <td className="text-center"><span className='pop700'>288,17€ al mese </span>se pagato annualmente <br /> 3458€ <span className="line-through">3800€</span>  all’anno<span className='block mt-5'>incluso credito pubblicitario</span><span /> </td>
                                </tr>
                            </table>
                            <table className='w-full lg:hidden xl:hidden md:hidden xmd:hidden mt-5 border-4 border-[#114653]'>
                                <tr>
                                    <th className="Brevia700 text-center">Tutti e 3 i pacchetti</th>
                                </tr>
                                <tr>
                                    <td className="text-center"><span className='pop700'>375€ al mese</span> se pagato trimestralmente <span className='block mt-5'>incluso credito pubblicitario</span><span /> </td>
                                </tr>
                                <tr>
                                    <td className="text-center"><span className='pop700'>345 € al mese </span>se pagato annualmente <br /> 4140€ <span className="line-through">4800€</span>  all’anno<span className='block mt-5'>incluso credito pubblicitario</span><span /> </td>
                                </tr>
                            </table>
                            <table className='w-full lg:hidden xl:hidden md:hidden xmd:hidden mt-5 border-4 border-[#114653]'>
                                <tr>
                                    <th className="Brevia700 text-center">Un singolo Pacchetto fra Express, Ready e Catch</th>
                                </tr>
                                <tr>
                                    <td className="text-center"><span className='pop700'>250€ al mese</span> se pagato trimestralmente <span className='block mt-5'>incluso credito pubblicitario</span><span /> </td>
                                </tr>
                                <tr>
                                    <td className="text-center"><span className='pop700'>232,50€ al mese </span>se pagato annualmente <br /> 2790€ <span className="line-through">3000€</span>  all’anno<span className='block mt-5'>incluso credito pubblicitario</span><span /> </td>
                                </tr>
                            </table>
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion className='shadow-none' style={{ borderTopWidth: 4, borderColor: "#E5E5E5", borderBottomWidth: 0, marginBottom: 10 }}>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
                        <p className="text-xl pop700">Qual è la frequenza dei pagamenti?</p>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography className="pr-24">
                            I pagamenti sono trimestrali oppure annuali in base alla tua scelta in fase di acquisto.<br />
                            Il primo pagamento avviene alla sottoscrizione dell’abbonamento, i successivi di tre mesi in tre mesi se hai scelto il trimestrale oppure l’anno successivo se hai scelto l’annuale.<br />
                            Se scegli l’abbonamento annuale puoi dilazionare i tuoi pagamenti in tre rate senza commissioni utilizzando Paypal come metodo di pagamento.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion className='shadow-none' style={{ borderTopWidth: 4, borderColor: "#E5E5E5", borderBottomWidth: 0, marginBottom: 10 }}>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
                        <p className="text-xl pop700">Quali metodi di pagamento accettate?</p>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography className="pr-24">
                            I metodi di pagamento accettati sono:<br /> <br />
                            -   Paypal (con possibilità di rateizzare l'importo in 3 rate mensili senza commissioni se scegli l’abbonamento annuale)<br />
                            - Carte di credito/debito
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion className='shadow-none' style={{ borderTopWidth: 4, borderColor: "#E5E5E5", borderBottomWidth: 0, marginBottom: 10 }}>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
                        <p className="text-xl pop700">Posso cambiare piano prima del rinnovo (annuale o trimestrale)?</p>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography className="pr-32">
                            Si, l'abbonamento può essere cambiato prima del rinnovo. <br />
                            <span className='block my-4'> 1.    Nel caso di un upgrade (es: al momento hai un solo pacchetto attivo e ne vuoi attivare un secondo), ti verrà chiesto di saldare la differenza. Il tuo abbonamento nuovo partirà il giorno stesso in cui ne farai richiesta. Riceverai subito il credito pubblicitario del primo trimestre, e a seguire quello dal secondo trimestre in poi.</span>
                            2.    Nel caso di un downgrade, potrai beneficiare del tuo piano più completo fino alla fine dell’abbonamento e ti rimborseremo la differenza di prezzo fino al prossimo rinnovo caricando direttamente un credito pubblicitario equivalente. Quando si concluderà il tuo periodo di abbonamento per il piano più completo, il tuo abbonamento verrà ridotto al numero di pacchetti da te selezionato.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion className='shadow-none' style={{ borderTopWidth: 4, borderColor: "#E5E5E5", borderBottomWidth: 0, marginBottom: 10 }}>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
                        <p className="text-xl pop700">Posso mettere in pausa il mio abbonamento? Cos’è la modalità vacanza?</p>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography className="pr-24">
                            Si, puoi mettere in pausa il tuo abbonamento attivando la “modalità vacanza”. La “modalità vacanza” è stata pensata per quando chiudi la tua attività per qualche periodo.
                            Dura al massimo 15 giorni e può essere attivata 2 volte l’anno. Quando la modalità vacanza è attiva tutte le funzionalità sono in pausa. Non potrai nè utilizzare le funzionalità nè ricevere prenotazioni, ordini o messaggi dalla piattaforma. Ti rimborseremo il valore dei giorni in cui attivato la modalità vacanza come credito pubblicitario, che puoi usare per far ripartire al meglio la tua attività dopo le ferie.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion className='shadow-none' style={{ borderTopWidth: 4, borderColor: "#E5E5E5", borderBottomWidth: 0, marginBottom: 10 }}>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
                        <p className="text-xl pop700">Come devo fare per ricevere la fattura del pagamento del mio abbonamento?</p>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography className="pr-24">
                            Riceverai la fattura sempre in automatico dopo ogni pagamento. In caso di pagamento rateizzato tramite PayPal la fattura viene emessa sempre per l’importo effettivamente pagato (quindi quello della rata) e non per l’intero importo.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion className='shadow-none' style={{ borderTopWidth: 4, borderColor: "#E5E5E5", borderBottomWidth: 0, marginBottom: 10 }}>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
                        <p className="text-xl pop700">Chi sarà il responsabile del trattamento dei dati da me inseriti nella vostra piattaforma?</p>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography className="pr-24">
                            Il trattamento dei dati inseriti all’interno della piattaforma Restaurant Club verrà effettuato da AiGot Srl. Il nostro DPO è Lorenzo Damiani. Potete contattarci per informazioni circa il trattamenti dati a privacy@aigot.com.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion className='shadow-none' style={{ borderTopWidth: 4, borderColor: "#E5E5E5", borderBottomWidth: 0, marginBottom: 10 }}>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
                        <p className="text-xl pop700">Come posso effettuare il login su Restaurant Club?</p>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography className="pr-24">
                            Effettuare il login su RC è facilissimo! Puoi utilizzare l’username e password che hai scelto al momento dell'iscrizione oppure puoi accedere velocemente attraverso il tuo account Google se hai scelto questo metodo di login in fase di registrazione.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion className='shadow-none' style={{ borderTopWidth: 4, borderColor: "#E5E5E5", borderBottomWidth: 0, marginBottom: 10 }}>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
                        <p className="text-xl pop700">Come posso recuperare o cambiare la Password del mio account Restaurant Club se la dimentico?</p>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography className="pr-24">
                            Puoi reimpostare facilmente la password del tuo account RC facilmente ed in totale autonomia seguendo i seguenti passaggi:
                            <br />   <br />      1)    Vai alla schermata di accesso di Restaurant Club.
                            <br />    2)   Fai clic su “Password dimenticata?”
                            <br /> 3)   Inserisci il tuo nome utente e fai clic su Reimposta password.
                            <br />  <br /> Ti invieremo le istruzioni su come reimpostarla all’indirizzo email associato al profilo del tuo account Restaurant Club. Se non ricevi le istruzioni per reimpostare la password ti invitiamo a controllare la casella di posta indesiderata o spam.<br /><br />
                            Se anche lì non trovi la nostra mail per reimpostare la tua password non preoccuparti, contatta la nostra assistenza tecnica e ci occuperemo di risolvere il tuo problema. Per ragioni di sicurezza le password non vengono salvate, perciò non siamo in grado di fornirti la password attuale del tuo account.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion className='shadow-none' style={{ borderTopWidth: 4, borderColor: "#E5E5E5", borderBottomWidth: 0, marginBottom: 10 }}>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
                        <p className="text-xl pop700">Perché il mio account è stato sospeso?</p>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography className="pr-24">
                            Le possibilità per cui il tuo account può essere stato sospeso sono:<br /><br />
                            a) ritardo nel pagamento del tuo abbonamento/rata oltre i 15 giorni;<br />
                            b) violazione di un qualunque punto del Termini e Condizioni/Codice Etico;<br />
                            c) violazione della normativa sull'antiriciclaggio (presente nel Codice Etico);<br />
                            d) nel caso il ristorante, bar o altra attività commerciale legata al mondo della ristorazione, iscritta alla piattaforma, sia coinvolto in un qualunque illecito che possa ledere la reputazione di Restaurants Club.<br /><br />
                            Se pensi che  il tuo account sia stato sospeso per sbaglio puoi scrivere ad assistenza@restaurants.club o chiamare il numero ###<br />
                            Ricorda che oltre i 15 giorni di ritardo il tuo account viene sospeso. Quando il tuo account è sospeso per motivazioni di ritardo nel pagamento, puoi provvedere ad aggiornare i metodi di pagamento dalla tua dashboard oppure contattare l’assistenza al numero ## o alla mail assistenza@restaurants.club
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion className='shadow-none' style={{ borderTopWidth: 4, borderColor: "#E5E5E5", borderBottomWidth: 0, marginBottom: 10 }}>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
                        <p className="text-xl pop700">Avrò assistenza per rispettare il GDPR europeo sul mio nuovo sito web?</p>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography className="pr-24">
                            Certamente! Tutto il sito e le raccolte di dati dal sito che creeremo per il tuo ristorante sarà compliant alla normativa. Il sito generato viene creato in modo automatizzato con una cookie policy e privacy policy a norma di legge.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion className='shadow-none' style={{ borderTopWidth: 4, borderColor: "#E5E5E5", borderBottomWidth: 0, marginBottom: 10 }}>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
                        <p className="text-xl pop700">Come posso recedere il mio abbonamento?</p>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography className="pr-24">
                            Puoi recedere il tuo abbonamento direttamente dalla dashboard Restaurants Club nella sezione account, oppure scrivendo una mail a assistenza@restaurants.club.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion className='shadow-none' style={{ borderTopWidth: 4, borderColor: "#E5E5E5", borderBottomWidth: 0, marginBottom: 10 }}>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
                        <p className="text-xl pop700">Cosa succedere se il mio account viene sospeso oppure quando recedo il mio abbonamento?</p>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography className="pr-24">
                            Non potrai più utilizzare nessuna funzionalità di Restaurants Club. Sul tuo sito e la tua App sarà visibile solo una pagina di cortesia, e non più il tuo sito web.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion className='shadow-none' style={{ borderTopWidth: 4, borderColor: "#E5E5E5", borderBottomWidth: 0, marginBottom: 10 }}>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
                        <p className="text-xl pop700">Come posso eliminare i miei dati dal vostro database se ho reciso definitivamente il mio abbonamento?</p>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography className="pr-24">
                            Nel caso in cui, dopo aver reciso il tuo abbonamento volessi eliminare definitivamente i tuoi dati dal nostro database devi inviare una mail ad aigot@pec.it Provvederemo entro 48 ore a eliminare i tuoi dati. Riceverai  conferma dell’eliminazione degli stessi tramite mail.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
            </div>

        </>
    )
}

export default FAQ