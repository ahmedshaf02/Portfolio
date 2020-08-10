import React from 'react'
import style from './Proficiency.css';
import ProficiencyCard from './ProficiencyCard';

function Proficiency(){

    return(
        <>
        <div><br/><br/>
        <div className="container mt-5 mb-5">
        <h1 className="text-center text-dark my-5">Proficiencies</h1>
        <br/>
          <div className="row mt-5">
              <ProficiencyCard techImg="https://www.clipartkey.com/mpngs/m/246-2465969_solutions-web-design2x-web-development-isometric-illustration.png" techTitle="Frontend" techStack="HTML, CSS, Bootstrap, JavaScript"  />

              <ProficiencyCard techImg="https://static.vecteezy.com/system/resources/previews/000/476/099/non_2x/vector-data-center-isometric-composition.jpg" techTitle="Data Structure" techStack="Array, String, Stack, Queue, Search" />

              <ProficiencyCard techImg="https://i.pinimg.com/originals/45/4a/8d/454a8d42e57365f42f0cb7cedba4beaf.png" techTitle="React" techStack=" React Application, Redux, Modern UI" />

              <ProficiencyCard techImg="https://seller.streetbell.com/wp-content/uploads/2020/01/isometric-icons-online-education-blob-min-uai-828x828-1.png" techTitle="Backend" techStack=" MERN Application, Modern App with MongoDB" />
            </div>
            <br/><br/><br/><br/>
            <hr/>
        </div>
        </div>
        <br/><br/>
        </>
    )
}
 
export default Proficiency;