import { useState } from "react";
import Partners from "../models/partners";
import Modal from "./components/modal";

function Teste({ data }) {
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  return (
    <>
      <button onClick={openModal}>Open Modal</button>
      <Modal visible={isModalOpen}>
        <h1>Modal Title</h1>
        <p>Modal content</p>
        <button onClick={closeModal}>Close Modal</button>
      </Modal>
    </>
  );
}

export default Teste;

export async function getServerSideProps() {
  let partners = [
    {
      name: "made service",
      telephone: ["077858985", "025656554"],
      email: ["made@gmail.com"],
      logo: "https://current-static-assets.s3-us-west-2.amazonaws.com/press-resources/Logos/Current+Logo.png",
      commune: "owendo",
      quartier: "pédiatrie",
      horaire: { ouverture: 8, fermeture: 15 },
      location: true,
      status: "concessionnaire",
    },
    {
      name: "rent cars",
      telephone: ["077858985", "025656554"],
      email: ["cars@gmail.com"],
      logo: "https://current-static-assets.s3-us-west-2.amazonaws.com/press-resources/Logos/Current+Logo.png",
      commune: "libreville",
      quartier: "oloumi zone industrielle",
      horaire: { ouverture: 8, fermeture: 15 },
      location: true,
      status: "concessionnaire",
    },
    {
      name: "cavaliers",
      telephone: ["077858985", "025656554"],
      email: ["cavalir@gmail.com"],
      logo: "https://current-static-assets.s3-us-west-2.amazonaws.com/press-resources/Logos/Current+Logo.png",
      commune: "akanda",
      quartier: "beau lieu",
      horaire: { ouverture: 8, fermeture: 15 },
      location: true,
      status: "concessionnaire",
    },
    {
      name: "blade service",
      telephone: ["077858985", "025656554"],
      email: ["blade@gmail.com"],
      logo: "https://current-static-assets.s3-us-west-2.amazonaws.com/press-resources/Logos/Current+Logo.png",
      commune: "libreville",
      quartier: "oloumi zone industrielle",
      horaire: { ouverture: 8, fermeture: 15 },
      location: true,
      status: "particulier",
    },
    {
      name: "dadis service",
      telephone: ["077858985", "025656554"],
      email: ["dadis@gmail.com"],
      logo: "https://images-platform.99static.com//W-zdZtSIM-aLebS-gSHS3O9uhM0=/89x676:879x1466/fit-in/500x500/99designs-contests-attachments/66/66554/attachment_66554399",
      commune: "owendo",
      quartier: "carrefour sni",
      horaire: { ouverture: 8, fermeture: 15 },
      location: true,
      status: "particulier",
    },
    {
      name: "house of cars",
      telephone: ["077858985", "025656554"],
      email: ["house@gmail.com"],
      logo: "https://images-platform.99static.com//W-zdZtSIM-aLebS-gSHS3O9uhM0=/89x676:879x1466/fit-in/500x500/99designs-contests-attachments/66/66554/attachment_66554399",
      commune: "akanda",
      quartier: "gigi",
      horaire: { ouverture: 8, fermeture: 15 },
      location: true,
      status: "particulier",
    },

    {
      name: "home service",
      telephone: ["077858985", "025656554"],
      email: ["home@gmail.com"],
      logo: "https://current-static-assets.s3-us-west-2.amazonaws.com/press-resources/Logos/Current+Logo.png",
      commune: "owendo",
      quartier: "station pétro",
      horaire: { ouverture: 8, fermeture: 15 },
      vente: true,
      status: "concessionnaire",
    },
    {
      name: "slide",
      telephone: ["077858985", "025656554"],
      email: ["slide@gmail.com"],
      logo: "https://current-static-assets.s3-us-west-2.amazonaws.com/press-resources/Logos/Current+Logo.png",
      commune: "libreville",
      quartier: "oloumi zone industrielle",
      horaire: { ouverture: 8, fermeture: 15 },
      vente: true,
      status: "concessionnaire",
    },
    {
      name: "rimmu",
      telephone: ["077858985", "025656554"],
      email: ["rimmu@gmail.com"],
      logo: "https://current-static-assets.s3-us-west-2.amazonaws.com/press-resources/Logos/Current+Logo.png",
      commune: "akanda",
      quartier: "chateau d'eau",
      horaire: { ouverture: 8, fermeture: 15 },
      vente: true,
      status: "concessionnaire",
    },

    {
      name: "service auto+",
      telephone: ["077858985", "025656554"],
      email: ["auto@gmail.com"],
      logo: "https://current-static-assets.s3-us-west-2.amazonaws.com/press-resources/Logos/Current+Logo.png",
      commune: "libreville",
      quartier: "oloumi zone industrielle",
      horaire: { ouverture: 8, fermeture: 15 },
      vente: true,
      status: "particulier",
    },
    {
      name: "garo service",
      telephone: ["077858985", "025656554"],
      email: ["garoservice@gmail.com"],
      logo: "https://images-platform.99static.com//W-zdZtSIM-aLebS-gSHS3O9uhM0=/89x676:879x1466/fit-in/500x500/99designs-contests-attachments/66/66554/attachment_66554399",
      commune: "owendo",
      quartier: "carrefour sni",
      horaire: { ouverture: 8, fermeture: 15 },
      vente: true,
      status: "particulier",
    },
    {
      name: "miledi of cars",
      telephone: ["077858985", "025656554"],
      email: ["miledi@gmail.com"],
      logo: "https://images-platform.99static.com//W-zdZtSIM-aLebS-gSHS3O9uhM0=/89x676:879x1466/fit-in/500x500/99designs-contests-attachments/66/66554/attachment_66554399",
      commune: "akanda",
      quartier: "gigi",
      horaire: { ouverture: 8, fermeture: 15 },
      vente: true,
      status: "particulier",
    },
    {
      name: "tribado",
      telephone: ["077858985", "025656554"],
      email: ["tribado@gmail.com"],
      logo: "https://current-static-assets.s3-us-west-2.amazonaws.com/press-resources/Logos/Current+Logo.png",
      commune: "libreville",
      quartier: "oloumi zone industrielle",
      horaire: { ouverture: 8, fermeture: 15 },
      vente: true,
      location: true,
      status: "concessionnaire",
    },
    {
      name: "sidoine",
      telephone: ["077858985", "025656554"],
      email: ["sidoine@gmail.com"],
      logo: "https://current-static-assets.s3-us-west-2.amazonaws.com/press-resources/Logos/Current+Logo.png",
      commune: "akanda",
      quartier: "chateau d'eau",
      horaire: { ouverture: 8, fermeture: 15 },
      vente: true,
      location: true,
      status: "concessionnaire",
    },
  ];

  // const fetch = await Partners.insertMany(partners);

  return {
    props: {
      data: null,
    },
  };
}










