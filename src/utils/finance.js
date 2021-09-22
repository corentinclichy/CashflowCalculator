const getAmountToReimboursePerMonth = (price, apport, duree, taux, dec) => {
  const montant = price - apport;
  const tauxMensuel = taux / 100 / 12;
  const nbrMensualite = duree * 12;

  if (nbrMensualite === 0) {
    return 0;
  }
  if (tauxMensuel === 0) {
    return Math.round(montant / nbrMensualite);
  }

  return (
    (montant * tauxMensuel) /
    (1 - Math.pow(1 + tauxMensuel, -nbrMensualite))
  ).toFixed(dec);
};

const getnotairePrice = (price, notairePourcentage) => {
  return price * notairePourcentage;
};

const getfraisBancaire = (price) => {
  return price * 0.015 + 1000;
};

const getTotalPrice = (price, notairePourcentage, travaux, commission) => {
  return (
    price +
    getfraisBancaire(price) +
    getnotairePrice(price, notairePourcentage / 100) +
    travaux +
    commission
  );
};
// Function to calculate the rentability of a real estate investment
export const getRentability = (
  type,
  price,
  travaux,
  notairePourcentage,
  rentMonth,
  chargeCopro,
  taxeFonciere,
  commission
) => {
  const totalPrice = getTotalPrice(
    price,
    notairePourcentage,
    travaux,
    commission
  );

  const fraisAgenceEtAssurance = rentMonth * 12 * 0.1;

  if (type === "brut") return ((rentMonth * 12) / totalPrice) * 100;

  if (type === "net")
    return (
      ((rentMonth * 12 -
        (chargeCopro + taxeFonciere + fraisAgenceEtAssurance)) /
        totalPrice) *
      100
    );
};

export const getRentaNet = (rent, chargeCopro, taxeFonciere) => {
  return rent - (chargeCopro + taxeFonciere) / 12 - rent * 0.1;
};

export const getCashFlow = (
  rent,
  notairePourcentage,
  travaux,
  chargeCopro,
  taxeFonciere,
  price,
  apport,
  duree,
  taux,
  commission
) => {
  const totalPrice = getTotalPrice(
    price,
    notairePourcentage,
    travaux,
    commission
  );
  return (
    +getRentaNet(rent, chargeCopro, taxeFonciere) -
    +getAmountToReimboursePerMonth(totalPrice, apport, duree, taux, 2)
  );
};
