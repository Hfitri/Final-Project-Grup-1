import React from "react";
import Card from "@material-tailwind/react/Card";
import CardImage from "@material-tailwind/react/CardImage";
import CardBody from "@material-tailwind/react/CardBody";
import CardFooter from "@material-tailwind/react/CardFooter";
import H6 from "@material-tailwind/react/Heading6";
import AOS from 'aos';
import 'aos/dist/aos.css';
import Button from "./homepage/Button";


export default function Artikel() {
  AOS.init();
  return (
    <div data-aos="zoom-out-up"
      data-aos-duration="1500"
    >
      <div class="pt-3">
        <div class="shadow-2xl box-content h-200 w-60 p-4 border-4 rounded-3xl bg-blue-400 ...">
          <Card>
            <CardImage
              src="https://d1bpj0tv6vfxyp.cloudfront.net/articles/758149_25-1-2021_13-8-13.jpeg"
              alt="Card Image"
            />

            <CardBody>
              <H6 color="gray">Kenali kebiasaan kucing anda</H6>
            </CardBody>

            <CardFooter>
              <div data-bs-toggle="modal" data-bs-target="#exampleModalLg">
                <Button title="Selengkapnya" />
              </div>


            </CardFooter>
          </Card>
        </div>

      </div>
    </div>


  );
}
