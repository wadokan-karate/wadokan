   import { Card } from "flowbite-react";
   import '../style/CardblogDetail.css'

  export default function CardblogDetail() {
    return (
        <Card href="#">
            
            <Card  className=" w-3/4 h-1/5 m-auto">
            <h1 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Noteworthy technology acquisitions 2021
            </h1>
                <div className="w-fit h-1/4 m-auto">
                <img src="https://flowbite.com/docs/images/blog/image-1.jpg" alt=""/>
                </div>

                <p className="font-normal text-gray-700 dark:text-gray-400 m-auto">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequuntur, minus blanditiis ipsum deserunt sit exercitationem nemo ea corporis aperiam voluptates saepe distinctio adipisci itaque iusto ullam quibusdam expedita autem suscipit dicta sequi optio? Sit voluptatem temporibus similique at itaque, sint molestias quaerat, dolorem libero inventore laboriosam quis illo, cum qui?
                </p>
            </Card>
      </Card>
    );
  }



