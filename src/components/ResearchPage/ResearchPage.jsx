/** @jsx h */
import { h } from 'preact'
import { Link } from 'react-router-dom'
import Graph from '@components/Graph/Graph.jsx'
import classNames from './ResearchPage.sass'

const ResearchPage = ({ axes, valueRange, example }) => {
  return <article class={classNames.researchPage}>
    <div class={classNames.titleWrapper}>
      <div class={classNames.titleInner}>
        <Link class={classNames.closeLink} to='/'>✕</Link>
        <h2>Die Forschung:</h2>
      </div>
    </div>
    <section class={classNames.twoColSection}>
      <p>
        Die Geschwindigkeit in unserer Gesellschaft nimmt stätig zu, sei es in Form von
        Kommunikation oder technischen Entwicklungen. In der Forschungsarbeit zur
        Web-App wurde der Frage nachgegangen, wie Marken und im Speziellen Logos in
        flüchtigen Zeiten gestaltet werden sollten? Kann ein statisches Logo eine Marke
        auf unterschiedlichen Kanälen noch adäquat präsentieren, in den Dialog mit dem
        Rezipienten treten, den Zeitgeist repräsentieren und gleichzeitig dem Kunden
        Sicherheit in einer Welt voller Ungewissheit geben? Oder sind Dynamische Logos
        eventuell die Lösung für Unternehmen, Designer und Markenmanager, um ihre Marke
        flexibel der Umwelt mit ihren veränderten Herausforderungen dynamisch
        anzupassen? Das Phänomen der Dynamischen Logos wurde durch unterschiedliche
        Forschungsansätze qualitativ wie quantitativ untersucht. Zum einen wurde ein
        Kategorisierungssystem des Dynamischen Logo Systems entwickelt, das die
        unterschiedlichen Gattungen und Spezies von Dynamischen Logos abbildet und
        verschiedene Beispiele von Dynamischen Logos kategorisiert. Durch das Dynamische
        Logo System kann der Grad an Flexibilität eines Dynamischen Logos ermittelt
        werden. Die Web-App in Form eines interaktiven Logo-Archivs dient als
        Visualisierung Forschungsergebnisse. Ziel der Web-App ist es, Unternehmen,
        Designer und Markenmanager die Beantwortung der Frage, ob Dynamische Logos die
        Lösung schlechthin sind, Marken flexibel der Umwelt mit ihren veränderten
        Herausforderungen dynamisch anzupassen, zu ermöglichen.
      </p>
      <Graph class={classNames.graph} axes={axes} values={example.values}
        valueRange={valueRange} />
    </section>
    <div class={classNames.titleWrapper}>
      <div class={classNames.titleInner}>
        <Link class={classNames.closeLink} to='/'>✕</Link>
        <h2>Definition Dynamischen Logo:</h2>
      </div>
    </div>
    <section>
      <div class='text'>
        <p>
          Bei Dynamischen Logos handelt es sich nicht um ein gesamtes dynamisches
          Branding, sondern nur um den Teilbereich des Markenzeichens. Jedoch bedienen
          sich Dynamisches Logos bei den gleichen positiven Effekten (dynamische
          Anpassung auf den neuen Medien wie Webseiten, soziale Netzwerke und mobile
          Angebote / In Dialog mit der Marke treten, sie anzueignen) die auch das
          Dynamische Branding hervorruft. Es kann festgehalten werden, dass die Qualität
          eines dynamischen Logos in der Wechselbeziehung zwischen Subjekt, seinen
          Inhalten und deren Visualisierung liegt. Somit können dynamische Logos nicht
          nur auf wechselnde Inhalte des Subjekts reagieren, sondern auch auf die
          seines Kontextes. Da sich ein Logo über den Faktor Zeit im Lebenszyklus eines
          Unternehmens /Marke revolutionär wie auch evolutionär durch ein Re-Branding
          verändert, kann davon ausgegangen werden, dass Logos immer einer gewissen
          Dynamik unterworfen sind. Bei Dynamischen Logos wird davon ausgegangen, dass
          der Konsument bzw. Rezipient versteht/erkennt, dass es sich um ein Dynamisches
          Logo handelt und dass er sich gleichzeitig darauf einstellt, mit
          unterschiedlichen Variationen konfrontiert zu werden.
        </p>
        <p>
          Ein dynamisches Logo kennzeichnet sich durch Veränderlichkeit,
          Kontextbezogenheit, Prozesshaftigkeit, Performativität, Nicht-Linearität,
          Kohärenz und Vielfalt. Es ist nicht nur ein einfaches grafisches Zeichen, das
          ein bestimmtes Subjekt (Unternehmen, Organisation, Privatperson, Produkt)
          repräsentiert und sich dabei auf eine rein symbolische Ebene beschränkt,
          sondern es transportiert etwas Reales, dass sich am Jetzt orientiert und
          dadurch performativ ist .
        </p>
      </div>
    </section>
    <div class={classNames.titleWrapper}>
      <div class={classNames.titleInner}>
        <Link class={classNames.closeLink} to='/'>✕</Link>
        <h2>Die Komponenten Dynamischer Logos:</h2>
      </div>
    </div>
    <section>
      <div class='text'>
        <p>
          Ein Dynamisches Logo kann im Vergleich zu einem singulären Logo aus statischen
          und flexiblen Komponenten bestehen und dabei jedoch jede Form einer singulären
          Logo-Art (Wortmarke, Wortbildmarke, Bildmarke, Buchstabenmarke, Zahlenmarke,
            Maskottchen Logo, Emblem Logo, Abstraktes Logo) annehmen. Die Grundlage für
            die Komponenten des Dynamischen Logos stellen die klassischen Bestandteile
            eines singulären Logos dar. Die einzelnen Komponenten erzeugen die Dynamik,
            wobei mindestens eine Konstante beibehalten werden muss, um die
            Wiedererkennung der Marken zu gewährleisten.
        </p>
        <dl>
          <dt>Farbe:</dt>
          <dd>
            Werden unterschiedliche Farben (Farbskalen, Farbkonzepte) für das Dynamische
            Logo verwendet? Die Verwendung von 1-3 Farben wird als statisch angesehen.
          </dd>
          <dt>Typografie:</dt>
          <dd>
            Werden unterschiedliche Schriften (Schrifttypen, Schriftfamilien,
            Schriftkassen) oder Schriftsysteme, visuelle Schrift für das Dynamische
            Logo verwendet?
          </dd>
          <dt>Form-Wahrnehmung:</dt>
          <dd>
            Wie wird die Form des Logos in der Gesamtbetrachtung wahrgenommen. Was ist der
            ausschlaggebende Faktor(Spezies des dynamischen Logos) die die Wahrnehmung des
            Logos bestimmt.
          </dd>
          <dt>Anordnung:</dt>
          <dd>
            Wie ist das Zusammenspiel (Größe, Position) zueinander der Komponenten des
            Dynamischen Logos?
          </dd>
          <dt>Text:</dt>
          <dd>
            Wie verändert sich der Text bzw. die Wortmarke eines Dynamischen Logos?
          </dd>
          <dt>Bildwelt:</dt>
          <dd>
            Wie gestaltet sich das Key Visual (Fotografien, Grafiken, Illustrationen,
            Piktogramme) eines Dynamischen Logos?
          </dd>
        </dl>
      </div>
    </section>
    <div class={classNames.titleWrapper}>
      <div class={classNames.titleInner}>
        <Link class={classNames.closeLink} to='/'>✕</Link>
        <h2>Die Gattungen und Spezies Dynamischer Logos:</h2>
      </div>
    </div>
    <section>
      <p>
        Ein Dynamisches Logo kann nicht nur über die Ausprägung von Flexibilität
        (Verhältnis von Flexiblen und Statischen Komponenten) definiert werden, sondern
        auch über den Grad an Flexibilität, der sich über die unterschiedlichen Gattungen
        von Dynamischen Logos ausdrückt. Ein dynamisches Logo kann in drei
        unterschiedlichen Gattungen mit jeweils zwei Spezies eingeteilt werden:
      </p>
      <table class={classNames.speciesTable}>
        <tbody>
          <tr>
            <th rowSpan='2'>Variiertes Logo</th>
            <td class={classNames.species}>Verzierungen und Masken</td>
            <td>
              <p>
                Ein statisches Logo wird durch flexible Komponenten ergänzt (Verzierung),
                dabei kann es sich um ein einzelnes Element handeln, das in
                unterschiedlichen Variationen auftritt oder um eine Maske, die in Form des
                Logos oder dessen Hintergrund gestaltet wird
              </p>
            </td>
          </tr>
          <tr>
            <td class={classNames.species}>Raster und Regeln</td>
            <td>
              <p>
                Durch ein Regelwerk, wie es ein Raster ist, können verschiedene Figuren
                gebildet werden, die in ihrer Form, Größe und Proportion aufeinander
                bezogen sind und beispielsweise in ihrer Farbe variieren können. Als
                Raster kann nicht nur ein Gestaltungs-Gitternetz angesehen werden,
                sondern auch das jeweilige Medium (Plakat, Visitenkarte, Cover,
                Briefpapier, Digitale Medien…), auf das das Logo platziert werden
                Das Medium, in dem das Logo präsentiert wird spannt durch seine
                Attribute und Möglichkeiten den Rahmen der durchführbaren Transformation
                (gleichzeig Raster und Regel) des Logos auf. Bewegung: Variierte Logos
                können auch durch die Abbildung von Bewegung, mittels einzelner
                Standbilder, die direkt aus einem Bewegungsablauf abgeleitet werden,
                entstehen, es wird ein übergeordnetes Gestaltungsprinzip benötigt, das
                ebenfalls als Regel angesehen werden kann.
              </p>
              <p>
                Transformation: Durch unterschiedliche Arten der Transformation des
                Ausgangs-Logos (unterschiedlicher Abstraktionsgrad, Änderung der
                Darstellungsform, Bilden von Selbstähnlichkeiten) können ebenfalls
                Variationen des Logos gebildet werden. Auch hier wird ein übergeordnetes
                Gestaltungsprinzip oder Basisthema benötigt (Regel), um eine
                Wiedererkennbarkeit zu sichern.
              </p>
            </td>
          </tr>
          <tr>
            <th rowSpan='2'>Kombiniertes Logo</th>
            <td class={classNames.species}>Module und Baukästen</td>
            <td>
              <p>
                Durch ein Ordnungssystem von Bezügen wie der Kombinatorik können Module
                (vgl. Legosteine) oder Baukästen (variabel kombinierbare Kernelemente)
                dynamische Logos erzeugen. Die Kernelemente wie Muster, Formen oder Bilder
                können z.B. als Rapport (kleinstes in sich abgeschlossenes Einzelelement)
                durch den Gestalter kombiniert werden.
              </p>
            </td>
          </tr>
          <tr>
            <td class={classNames.species}>Permutation</td>
            <td>
              <p>
                Die Anzahl der zu kombinierenden Elemente ist bei der Permutation wesentlich
                größer, die Form der Elemente komplexer und die Kombination der Elemente
                erfolgt statt über den Gestalter über den Computer. Dabei kann es  sich um
                eine zufällige Kombination handeln oder um eine, die einer vom Gestalter
                vorbestimmten Kombinationsregel folgt.
              </p>
            </td>
          </tr>
          <tr>
            <th rowSpan='2'>Interaktives Logo</th>
            <td class={classNames.species}>Generativ durch Daten</td>
            <td>
              <p>
                Algorithmen, Interfaces, Programme binden Daten als reale Prozesse in die
                Gestaltung eines Logos ein. Die vom Gestalter definierten Regeln werden
                durch die Programme in Echtzeit angewandt. Grundlegend wird unterschieden
                zwischen solchen Programmen, die ein manuell entwickeltes Design steuern,
                und solchen, die das Design selbst erzeugen.
              </p>
            </td>
          </tr>
          <tr>
            <td class={classNames.species}>Individualisiert durch Rezipient</td>
            <td>
              <p>
                Der Rezipient tritt durch die Möglichkeit der Individualisierbarkeit des
                Logos in Interaktion mit diesem. Dabei kann es sich bei dem Rezipienten um
                den Kunden wie auch den Mitarbeiter des Unternehmens handeln, dem die
                Möglichkeit gebenden wird das Logo zu individualisieren. Dabei kann sich
                das Ergebnis in mehr oder weniger gegebenen Grenzen bewegen, ist darin
                jedoch unvorhersehbar und nicht kontrollierbar. Die Möglichkeit der
                Individualisierbarkeit und des Grades an Interaktion hängt von der Wahl des
                jeweiligen Darstellungsmittels ab.
              </p>
            </td>
          </tr>
        </tbody>
      </table>
    </section>
    <div class={classNames.titleWrapper}>
      <div class={classNames.titleInner}>
        <Link class={classNames.closeLink} to='/'>✕</Link>
        <h2>Kontakt</h2>
      </div>
    </div>
    <section>
      <p>
        Um den Index Dynamischer Logos zu erweitern und aktuell zu halten laden wir Sie
        herzlich dazu ein Ihre Dynamischen Logos einzureichen. Dabei wird Ihr Beispiel –
        sofern es der Definition von Dynamischen Logos entspricht - anhand der
        beschriebenen Spezies und Logo-Komponenten durch das Dynamische Logo System
        kategorisiert und archiviert.
      </p>
      <p>
        Bitte geben Sei bei der Einreichung eines Logos folgende Daten an:
        Unternehmen / Agentur / Branche / Umsetzungsjahr / Land / kurzen
        Beschreibungstext zum Logo / Logo Abbildungen
        (bis zu 10 Logo Varianten 50px X 50 px) / Web-Links als Quellennachweis.
      </p>
      <p>
        Zum Einreichen eines Dynamischen Logos schreiben Sei eine Mail an:
        dynamischelogos@wunderundfitzig.de
      </p>
      <p>
        Wunder & Fitzig <br />
        +49 (0) 30 864 514 59 <br />
        <a href='mailto:info@wunderundfitzig.de'>info@wunderundfitzig.de</a>
      </p>
    </section>
  </article>
}

export default ResearchPage
