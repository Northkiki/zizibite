content_page1 = [
    `<h3><strong>La Foudre Noir</strong></h3><img src="public/img/Apparence.png" style="width: auto;height: 75%;" alt="">`,
    `
    <h3><strong>Histoire de la foudre noir</strong></h3>
        <p>La foudre noir a été creer par moi meme,sont but est des plus simple mais avant je vais vous compter comment cette derniere a été creer</p> 
        <p>Durant ma selection de nombreuses personnes on été dechicter tellement de personne que j'en suis le seul survivant,apres cet evenement traumatisant je me suis promis de devenir pillier et de creer une escouade tellement puissantes que les lunes elles meme en aurais la chair de poules rien qu'en entendre le nom. Mais , pour cela il fallait trouver les bonnes personnes et les entrainer! les entrainer jusqu'a leurs pieds ne sente meme plus si il marche,jusqu'a ce que leurs poings de savent plus si ils frappent ! </p> 
        <button onclick="PageSuivante(1)">Page Précedente</button></div>
    `,
    `
    <h3><strong>Entrainements</strong></h3>
    <p>
    Voici l'entrainement a suivre! Chaque jours souffler dans la jare minimum 3 heures suite a cela magner la sabres en apnée durant 1heures,pour continuer vous devez mediter durant 2 heures minimum afin de devenir le plus calmes et reussir a deconecter toutes vos terminaisons nerveuse!
    </p>
    <button onclick="PageSuivante(2)">Page Précedente</button></div>
    `,
    `
    <p>
    Bien je pense avoir tout dit sur la foudre malheuresement je me fait vieux et risque de mourir j'ai inscrit tout mon savoir dans ce livre et c'est maitenant a vous de le developper !  </p>

    <button onclick="PageSuivante(3)">Page Précedente</button></div>
    `,
    `

    `,
    `
    `,
    `
    `,
    `
    `,
    `
    `,
    `
    `,
];
content_page2 = [
    `<h3><strong>Identité du redacteur</strong></h3><br><p>Nom:Fuyu </p><p>Prenom: Zhy </p><br><p>Je decerne ce carnet a Noru mon disciple le plus competent je suis sur qu'il reussiras a acomplir cette profetie</p><br><div class="flex-box"><button onclick="PageSuivante(2)">Page Suivante</button></div>`,
    `
    <h3><strong>But...</strong></h3>
    <p>Sont but est simples...Comme vous le savez les demons les plus forts s'attaque au plus faibles et fuis les plus fort...La foudre noir a été creer pour resoudre se probleme,nous agissons dans l'ombres observont les demons les traquons et les tuons de la plus grandes rapidité et le plus grand des silences.Mais pour ne pas se faire reperer par un demon ils faut reussir a masquer sa presence et son auras j'ai donc refflechis a une technique une techniques que seuls les utilisateurs de la foudres peuvent utiliser cette technique consistes a deconecter toutes les liaisons nerveuse de sont corps,et de combattre avec la seul force de sont souffle.Bien sur cela demande un etrainement extremement rigoureux prenant 2ans au minimum.</p>
    <button onclick="PageSuivante(3)">Page Suivante</button></div>
    `,
    `
    <p>
    <h3><strong>Regles</strong></h3>
   Chaques membres de la foudres noir signe un pacte dans ce pacte il est ecrit que si une seules regles n'est pas respecter se dernier devras rendre son sabres et retourner a la vie civil.
    </p>
    <h2><strong>Regle 1!</strong></h2>
    <p>
    La Foudres Noir Doit rester totalements secrettes seules les Pilliers sont au courant.
    </p>
    <h2><strong>Regle 2!</strong></h2>
    <p>
    Tant qu'une mission n'est pas executer il est interdit de rentrer au QG.
    </p>
    <h2><strong>Regle 3!</strong></h2>
    <p>
    Le respect Mutuel est obligatoire !
    </p>
    <h2><strong>Regle 4!</strong></h2>
    <p>
    Le masques est obligatoire un Membres de la Foudres Noir non Masqué est un membre en Danger !
    </p>
    <button onclick="PageSuivante(4)">Page Suivante</button></div>
    `,
    `
    `,
    `
    `,
    `
    `,
    `
    `,
    `

    `,
    `
    `,
    `
    `,
];

function PageSuivante(nb) {
    document.getElementById("page1").innerHTML = content_page1[nb - 1];
    document.getElementById("page2").innerHTML = content_page2[nb - 1];
};

setTimeout(function() {
    PageSuivante(1);
}, 10);
