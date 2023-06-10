export default function Validation(values){

    const errors = {}

    const email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,6}$/;

    if(values.nom === ""){
        errors.nom = "Votre nom est obligatoire!";
    }

    if(values.prenom === ""){
        errors.prenom = "Votre prénom est obligatoire!";
    }

    if(values.email === ""){
        errors.email = "Votre adresse email est obligatoire";
    }else if(!email_pattern.test(values.email)){
        errors.email = "Votre email n'est pas correct";
    }
    
    
    if(values.pays_origine === ""){
        errors.pays_origine = "Votre d'origine est obligatoire!";
    }

    if(values.type_emplois === ""){
        errors.type_emplois = "Votre type d'emplois est obligatoire!";
    }

    if(values.sexe === ""){
        errors.sexe = "Votre sexe est obligatoire!";
    }

    if(values.phone === ""){
        errors.phone = "Votre téléphone est obligatoire!";
    }

    if(values.pays_imigrations === ""){
        errors.pays_imigrations = "Votre pays d'immigration est obligatoire!";
    }

    if(values.type_de_procedure === ""){
        errors.type_de_procedure = "Votre procedure est obligatoire!";
    }

    if(values.cv_postulant === ""){
        errors.cv_postulant = "Votre CV est obligatoire en format PDF!";
    }

    if(values.recherche === ""){
        errors.recherche = "Recherche obligatoire";
    }

    if(values.poste === ""){
        errors.poste = "Votre poste est obligatoire";
    }

    if(values.objet === ""){
        errors.objet = "Objet est obligatoire";
    }

    if(values.message === ""){
        errors.message = "Votre message est obligatoire";
    }

    return errors;

}