import "./App.css";
import Job from './components/Job';
import Main from './components/Main';
import Header from "./components/Header";
import Footer from "./components/Footer";
import Section from './components/Section';
import Article from './components/Article';
import Presentation from './components/Presentation'
import JobCathegories from "./components/JobCathegories";
import ArticlesContainer from './components/ArticlesContainer';
import Card from "./components/Card";
import Caroussel from "./components/Caroussel";

function App() {
    return (
        <div className="h-[100vh] document-container">
            <Header />
            <Main />
            <Section title="Popular Job Categories" subtitle="2023 jobs live -293 added today">
                <JobCathegories />
            </Section>
            <Section title="Featured Job" subtitle="Knew your worth and find the job that qualify your life" className="pt-24">
                <div className="grid grid-cols-2 gap-8 Jobcontainer">
                    <Job title= "Software Engineer (Android), Libraries" fullTime="" isprivate="true" Urgent="" segment="Segment r" ville="Douala" datePublication="10 hours ago" somme="1000 - 2000"/>
                    <Job title= "Software Engineer (IOS), Libraries" fullTime="" isprivate="true" Urgent="true" segment="Segment r" ville="Douala" datePublication="10 hours ago" somme="3000 - 4000"/>
                    <Job title= "Software Engineer (Android), Libraries" fullTime="true" isprivate="" Urgent="" segment="Segment r" ville="Douala" datePublication="10 hours ago" somme="5000 - 6000"/>
                    <Job title= "Software Engineer (Android), Libraries" fullTime="true" isprivate="true" Urgent="true" segment="Segment r" ville="Douala" datePublication="10 hours ago" somme="7000 - 8000"/>
                    <Job title= "Software Engineer (Android), Libraries" fullTime="true" isprivate="" Urgent="" segment="Segment r" ville="Douala" datePublication="10 hours ago" somme="9000 - 10000"/>
                    <Job title= "Software Engineer (Android), Libraries" fullTime="true" isprivate="true" Urgent="true" segment="Segment r" ville="Douala" datePublication="10 hours ago" somme="5000 - 5500"/>
                </div>
                <div class="w-full flex justify-center items-center">
                    <button class="px-12 py-4 rounded-md bg-blue-600 text-white capitalize flex align-center mt-12">load more listing</button>
                </div>
            </Section>
            <Section title="Testimonials From Our Customers" subtitle="They try it once and they adopt. Try it and find your dream work" className="pt-24" style={{ backgroundColor:"#F0F5F8"}}>
                <Caroussel>
                    <Card title="Great quality" name="Gabriel Nolan" subtitle="Consultant">
                        0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000
                        0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000
                        0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000
                    </Card>
                    <Card title="Great quality" name="Gabriel Nolan" subtitle="Consultant">
                        Whithout Brad i'd be homeless, they found me a job and got me sorted out quickly with everything Can't quite... the Mitech team works really hard to ensure high level of quality
                    </Card>
                    <Card title="Great quality" name="Gabriel Nolan" subtitle="Consultant">
                        Whithout Brad i'd be homeless, they found me a job and got me sorted out quickly with everything Can't quite... the Mitech team works really hard to ensure high level of quality
                    </Card>
                    <Card title="Great quality" name="Gabriel Nolan" subtitle="Consultant">
                        Whithout Brad i'd be homeless, they found me a job and got me sorted out quickly with everything Can't quite... the Mitech team works really hard to ensure high level of quality
                    </Card>
                    <Card title="Great quality" name="Gabriel Nolan" subtitle="Consultant">
                        Whithout Brad i'd be homeless, they found me a job and got me sorted out quickly with everything Can't quite... the Mitech team works really hard to ensure high level of quality
                    </Card>
                    <Card title="Great quality" name="Gabriel Nolan" subtitle="Consultant">
                        Whithout Brad i'd be homeless, they found me a job and got me sorted out quickly with everything Can't quite... the Mitech team works really hard to ensure high level of quality
                    </Card>
                    <Card title="Great quality" name="Gabriel Nolan" subtitle="Consultant">
                        Whithout Brad i'd be homeless, they found me a job and got me sorted out quickly with everything Can't quite... the Mitech team works really hard to ensure high level of quality
                    </Card>
                    <Card title="Great quality" name="Gabriel Nolan" subtitle="Consultant">
                        Whithout Brad i'd be homeless, they found me a job and got me sorted out quickly with everything Can't quite... the Mitech team works really hard to ensure high level of quality
                    </Card>
                </Caroussel>
            </Section>
            <Section className="pt-24">
                <Presentation />
            </Section>
            <Section title="Recent News Articles" subtitle="Fresh news Related news Content posted each day" className="pt-24" style={{ backgroundColor: "#F0F5F8" }}>
                <ArticlesContainer>
                    <Article date="August 31, 2021" title="hfoizehfz">
                        hithout Brad i'd be homeless, they found me a job and got me sorted out quickly with everything Can't quite... the Mitech team works really hard to ensure high level of quality
                    </Article>
                    <Article date="August 31, 2021" title="Attract sales and profits">
                        Whithout Brad i'd be homeless, they found me a job and got me sorted out quickly with everything Can't quite... the Mitech team works really hard to ensure high level of quality
                    </Article>
                    <Article date="August 31, 2021" title="Attract sales and profits">
                        Whithout Brad i'd be homeless, they found me a job and got me sorted out quickly with everything Can't quite... the Mitech team works really hard to ensure high level of quality
                    </Article>
                </ArticlesContainer>
            </Section>
            <Footer />
        </div>
    );
}

export default App;
