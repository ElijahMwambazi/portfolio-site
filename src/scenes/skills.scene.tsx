import { useState } from "react";
import { motion } from "framer-motion";
import useMediaQuery from "../hooks/useMediaQuery";
import Heading from "../components/heading.component";
import SkillCard from "../components/skill-card.component";
// Programming Languages
import { ReactComponent as JavaScriptIcon } from "../assets/skills/programming-languages/java-script.svg";
import { ReactComponent as TypeScriptIcon } from "../assets/skills/programming-languages/type-script.svg";
import { ReactComponent as PythonIcon } from "../assets/skills/programming-languages/python.svg";
import { ReactComponent as JavaIcon } from "../assets/skills/programming-languages/java.svg";
import { ReactComponent as CPlusPlusIcon } from "../assets/skills/programming-languages/C++.svg";
import { ReactComponent as CSharpIcon } from "../assets/skills/programming-languages/c-sharp.svg";
import { ReactComponent as RustIcon } from "../assets/skills/programming-languages/rust.svg";
import { ReactComponent as RubyIcon } from "../assets/skills/programming-languages/ruby.svg";
import { ReactComponent as DartIcon } from "../assets/skills/programming-languages/dart.svg";
import { ReactComponent as GoLangIcon } from "../assets/skills/programming-languages/golang.svg";
// Front-End
import { ReactComponent as HTMLIcon } from "../assets/skills/front-end/html-5.svg";
import { ReactComponent as ReactIcon } from "../assets/skills/front-end/react.svg";
import { ReactComponent as CSSIcon } from "../assets/skills/front-end/css.svg";
import { ReactComponent as SassIcon } from "../assets/skills/front-end/sass.svg";
import { ReactComponent as TailwindIcon } from "../assets/skills/front-end/tailwind-css.svg";
import { ReactComponent as BootstrapIcon } from "../assets/skills/front-end/bootstrap.svg";
import { ReactComponent as StyledComponentsIcon } from "../assets/skills/front-end/styled-components.svg";
import { ReactComponent as MaterialUIIcon } from "../assets/skills/front-end/material-ui.svg";
import { ReactComponent as SolidJSIcon } from "../assets/skills/front-end/solidjs.svg";
import { ReactComponent as AngularJSLIcon } from "../assets/skills/front-end/angularjs.svg";
import { ReactComponent as VueIcon } from "../assets/skills/front-end/vuejs.svg";
import { ReactComponent as NextJSIcon } from "../assets/skills/front-end/nextjs.svg";
import { ReactComponent as PreactIcon } from "../assets/skills/front-end/preact.svg";
import { ReactComponent as ReduxIcon } from "../assets/skills/front-end/redux.svg";
// Back-End
import { ReactComponent as DotNetFrameworkIcon } from "../assets/skills/back-end/.net-framework.svg";
import { ReactComponent as DotNetCoreIcon } from "../assets/skills/back-end/.net-core.svg";
import { ReactComponent as DjangoIcon } from "../assets/skills/back-end/django.svg";
import { ReactComponent as NodeIcon } from "../assets/skills/back-end/nodejs.svg";
import { ReactComponent as FiberIcon } from "../assets/skills/back-end/fiber.svg";
import { ReactComponent as GraphQLIcon } from "../assets/skills/back-end/graphql.svg";
import { ReactComponent as LaravelIcon } from "../assets/skills/back-end/laravel.svg";
import { ReactComponent as NestIcon } from "../assets/skills/back-end/nestjs.svg";
import { ReactComponent as RubyOnRailsIcon } from "../assets/skills/back-end/ruby-on-rails.svg";
import { ReactComponent as SpringBootIcon } from "../assets/skills/back-end/spring-boot.svg";
// Mobile
import { ReactComponent as FlutterIcon } from "../assets/skills/mobile/flutter.svg";
import { ReactComponent as ReactNativeIcon } from "../assets/skills/mobile/react-native.svg";
// Databases
import { ReactComponent as FirebaseIcon } from "../assets/skills/database/firebase.svg";
import { ReactComponent as MongoDBIcon } from "../assets/skills/database/mongodb.svg";
import { ReactComponent as MicrosoftServerIcon } from "../assets/skills/database/microsoft-sql-server.svg";
import { ReactComponent as MSQLIcon } from "../assets/skills/database/mysql.svg";
import { ReactComponent as PostgraseSQLIcon } from "../assets/skills/database/postgresql.svg";
import { ReactComponent as OracleIcon } from "../assets/skills/database/oracle.svg";
import { ReactComponent as RedisIcon } from "../assets/skills/database/redis.svg";
// Data Science
import { ReactComponent as NumpyIcon } from "../assets/skills/data-science/numpy.svg";
import { ReactComponent as PandasIcon } from "../assets/skills/data-science/pandas.svg";
import { ReactComponent as TensorflowIcon } from "../assets/skills/data-science/tensorflow.svg";
import { ReactComponent as SeleniumIcon } from "../assets/skills/data-science/selenium.svg";
import { ReactComponent as JupyterNotebookIcon } from "../assets/skills/data-science/jupyter-notebook.svg";
import { ReactComponent as MatlabIcon } from "../assets/skills/data-science/matlab.svg";
import { ReactComponent as MatplotlibIcon } from "../assets/skills/data-science/matplotlib.svg";
import { ReactComponent as PytorchIcon } from "../assets/skills/data-science/pytorch.svg";
import { ReactComponent as RIcon } from "../assets/skills/data-science/r.svg";
import { ReactComponent as ScikitLearnIcon } from "../assets/skills/data-science/Scikit-learn.svg";
import { ReactComponent as ScipyIcon } from "../assets/skills/data-science/scipy.svg";
// Blockchain
import { ReactComponent as SolidityIcon } from "../assets/skills/blockchain/solidity.svg";
// Version Control
import { ReactComponent as GitIcon } from "../assets/skills/version-control/git.svg";
import { ReactComponent as GithubIcon } from "../assets/skills/version-control/github.svg";
import { ReactComponent as GitladIcon } from "../assets/skills/version-control/gitlab.svg";
import { ReactComponent as BitbucketIcon } from "../assets/skills/version-control/bitbucket.svg";
// Tools
import { ReactComponent as PowerBIIcon } from "../assets/skills/tools/power-bi.svg";
import { ReactComponent as TableauIcon } from "../assets/skills/tools/tableau.svg";
import { ReactComponent as DockerIcon } from "../assets/skills/tools/docker.svg";
import { ReactComponent as KubernetesIcon } from "../assets/skills/tools/kubernetes.svg";
import { ReactComponent as FigmaIcon } from "../assets/skills/tools/figma.svg";
import { ReactComponent as ExcelIcon } from "../assets/skills/tools/excel.svg";
import { ReactComponent as ElasticsearchIcon } from "../assets/skills/tools/elasticsearch.svg";
import { ReactComponent as AccessIcon } from "../assets/skills/tools/access.svg";
import SkillsHeader from "../components/skills-header.component";
import SkillConatiner from "../components/skill-container.component";
import SkillCardsContainer from "../components/skills-card-container.componenet";
import ShootingStars from "../components/shooting-stars.component";

export type ShowSkills = {
  showProgrammingLanguges: boolean;
  showFrontendSkills: boolean;
  showBackendSkills: boolean;
  showMoblieSkills: boolean;
  showDatabaseSkills: boolean;
  showDataScienceSkills: boolean;
  showTools: boolean;
  showVersionControl: boolean;
  showBlockchain: boolean;
  showDigitalmarketing: boolean;
};

const Skills = () => {
  const isAboveMediumScreens = useMediaQuery(
    "(min-width: 1060px)"
  );
  const [showSkills, setShowSkills] =
    useState<ShowSkills>({
      showProgrammingLanguges: false,
      showFrontendSkills: false,
      showBackendSkills: false,
      showMoblieSkills: false,
      showDatabaseSkills: false,
      showDataScienceSkills: false,
      showTools: false,
      showVersionControl: false,
      showBlockchain: false,
      showDigitalmarketing: false,
    });

  enum ShowSkillsKeys {
    SHOW_PROGRAMMING_LANGUAGES = "showProgrammingLanguges",
    SHOW_FRONTEND_SKILLS = "showFrontendSkills",
    SHOW_BACKEND_SKILLS = "showBackendSkills",
    SHOW_MOBILE_SKILLS = "showMoblieSkills",
    SHOW_DATABASE_SKILLS = "showDatabaseSkills",
    SHOW_DATA_SCIENCE_SKILLS = "showDataScienceSkills",
    SHOW_TOOLS = "showTools",
    SHOW_VERSION_CONTROL = "showVersionControl",
    SHOW_BLOCKCHAIN = "showBlockchain",
    SHOW_DIGITAL_MARKETING = "showDigitalMarketing",
  }

  const toggleSkill =
    (skill: keyof ShowSkills) =>
    (
      event: React.MouseEvent<HTMLParagraphElement>
    ) =>
      setShowSkills({
        ...showSkills,
        [skill]: !showSkills[skill],
      });

  return (
    <section
      id="skills"
      className="relative mt-24 pb-24"
    >
      {/* HEADER AND SKILLS */}
      <div className="flex flex-col">
        <motion.div
          className="md:w-1/3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 1 }}
          variants={{
            hidden: { opacity: 0, x: -100 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <div className="flex">
            <Heading
              firstPartOfText={"Sk"}
              secondPartOfText={"ills"}
            />
          </div>
        </motion.div>

        {/* Programming Languages */}
        <SkillConatiner>
          <SkillsHeader
            skill={
              showSkills.showProgrammingLanguges
            }
            onSKillClick={toggleSkill(
              ShowSkillsKeys.SHOW_PROGRAMMING_LANGUAGES
            )}
            heading={"Progamming Languages"}
          />

          <SkillCardsContainer
            showSkills={
              showSkills.showProgrammingLanguges
            }
          >
            {/* Javascript */}
            <SkillCard
              skillIcon={
                <JavaScriptIcon className="w-8 h-8" />
              }
              title="JavaScript"
              percentage={90}
            />
            {/* Typescript */}
            <SkillCard
              skillIcon={
                <TypeScriptIcon className="w-8 h-8" />
              }
              title="TypeScript"
              percentage={90}
            />
            {/* Python */}
            <SkillCard
              skillIcon={
                <PythonIcon className="w-8 h-8" />
              }
              title="Python"
              percentage={90}
            />
            {/* Java */}
            <SkillCard
              skillIcon={
                <JavaIcon className="w-8 h-8" />
              }
              title="Java"
              percentage={30}
            />
            {/* C++ */}
            <SkillCard
              skillIcon={
                <CPlusPlusIcon className="w-8 h-8" />
              }
              title="C++"
              percentage={30}
            />
            {/* C# */}
            <SkillCard
              skillIcon={
                <CSharpIcon className="w-8 h-8" />
              }
              title="C#"
              percentage={15}
            />
            {/* Rust */}
            <SkillCard
              skillIcon={
                <RustIcon className="w-8 h-8" />
              }
              title="Rust"
              percentage={15}
            />
            {/* Ruby */}
            <SkillCard
              skillIcon={
                <RubyIcon className="w-8 h-8" />
              }
              title="Ruby"
              percentage={15}
            />
            {/* Dart */}
            <SkillCard
              skillIcon={
                <DartIcon className="w-8 h-8" />
              }
              title="Dart"
              percentage={15}
            />
            {/* GO Lang */}
            <SkillCard
              skillIcon={
                <GoLangIcon className="w-8 h-8" />
              }
              title="Go Lang"
              percentage={15}
            />
          </SkillCardsContainer>
        </SkillConatiner>

        {/* Frontend Skills */}
        <SkillConatiner>
          <SkillsHeader
            skill={showSkills.showFrontendSkills}
            onSKillClick={toggleSkill(
              ShowSkillsKeys.SHOW_FRONTEND_SKILLS
            )}
            heading={"Frontend"}
          />

          <SkillCardsContainer
            showSkills={
              showSkills.showFrontendSkills
            }
          >
            {/* HTML */}
            <SkillCard
              skillIcon={
                <HTMLIcon className="w-8 h-8" />
              }
              title="HTML"
              percentage={100}
            />
            {/* React */}
            <SkillCard
              skillIcon={
                <ReactIcon className="w-8 h-8" />
              }
              title="React"
              percentage={90}
            />
            {/* CSS */}
            <SkillCard
              skillIcon={
                <CSSIcon className="w-8 h-8" />
              }
              title="CSS"
              percentage={90}
            />
            {/* Sass */}
            <SkillCard
              skillIcon={
                <SassIcon className="w-8 h-8" />
              }
              title="Sass"
              percentage={90}
            />
            {/* Tailwind */}
            <SkillCard
              skillIcon={
                <TailwindIcon className="w-8 h-8" />
              }
              title="Tailwind"
              percentage={100}
            />
            {/* Bootstrap */}
            <SkillCard
              skillIcon={
                <BootstrapIcon className="w-8 h-8" />
              }
              title="Bootstrap"
              percentage={100}
            />
            {/* Styled Components */}
            <SkillCard
              skillIcon={
                <StyledComponentsIcon className="w-8 h-8" />
              }
              title="Styled Components"
              percentage={100}
            />
            {/* Material UI */}
            <SkillCard
              skillIcon={
                <MaterialUIIcon className="w-8 h-8" />
              }
              title="Material UI"
              percentage={100}
            />
            {/* SolidJs */}
            <SkillCard
              skillIcon={
                <SolidJSIcon className="w-8 h-8" />
              }
              title="SolidJs"
              percentage={15}
            />
            {/* AngularJs */}
            <SkillCard
              skillIcon={
                <AngularJSLIcon className="w-8 h-8" />
              }
              title="AngularJs"
              percentage={15}
            />
            {/* VueJs */}
            <SkillCard
              skillIcon={
                <VueIcon className="w-8 h-8" />
              }
              title="VueJs"
              percentage={15}
            />
            {/* NextJs */}
            <SkillCard
              skillIcon={
                <NextJSIcon className="w-8 h-8" />
              }
              title="NextJs"
              percentage={50}
            />
            {/* Preact */}
            <SkillCard
              skillIcon={
                <PreactIcon className="w-8 h-8" />
              }
              title="Preact"
              percentage={80}
            />
            {/* Redux and Redux Toolkit */}
            <SkillCard
              skillIcon={
                <ReduxIcon className="w-8 h-8" />
              }
              title="Redux and Redux Toolkit"
              percentage={100}
            />
          </SkillCardsContainer>
        </SkillConatiner>

        {/* Backend skills */}
        <SkillConatiner>
          <SkillsHeader
            skill={showSkills.showBackendSkills}
            onSKillClick={toggleSkill(
              ShowSkillsKeys.SHOW_BACKEND_SKILLS
            )}
            heading={"Backend"}
          />

          <SkillCardsContainer
            showSkills={
              showSkills.showBackendSkills
            }
          >
            {/* .Net Framework */}
            <SkillCard
              skillIcon={
                <DotNetFrameworkIcon className="w-8 h-8" />
              }
              title=".Net Framework"
              percentage={15}
            />
            {/* .Net Core */}
            <SkillCard
              skillIcon={
                <DotNetCoreIcon className="w-8 h-8" />
              }
              title=".Net Core"
              percentage={15}
            />
            {/* Django */}
            <SkillCard
              skillIcon={
                <DjangoIcon className="w-8 h-8" />
              }
              title="Django"
              percentage={15}
            />
            {/* NodeJs and ExpressJs*/}
            <SkillCard
              skillIcon={
                <NodeIcon className="w-8 h-8" />
              }
              title="NodeJs and ExpressJs"
              percentage={15}
            />
            {/* Fiber */}
            <SkillCard
              skillIcon={
                <FiberIcon className="w-8 h-8" />
              }
              title="Fiber"
              percentage={15}
            />
            {/* GraphQL */}
            <SkillCard
              skillIcon={
                <GraphQLIcon className="w-8 h-8" />
              }
              title="GraphQL"
              percentage={15}
            />
            {/* Laravel */}
            <SkillCard
              skillIcon={
                <LaravelIcon className="w-8 h-8" />
              }
              title="Laravel"
              percentage={15}
            />
            {/* NestJs */}
            <SkillCard
              skillIcon={
                <NestIcon className="w-8 h-8" />
              }
              title="NestJs"
              percentage={15}
            />
            {/* Ruby on Rails */}
            <SkillCard
              skillIcon={
                <RubyOnRailsIcon className="w-8 h-8" />
              }
              title="Ruby on Rails"
              percentage={15}
            />
            {/* Spring Boot */}
            <SkillCard
              skillIcon={
                <SpringBootIcon className="w-8 h-8" />
              }
              title="Spring Boot"
              percentage={15}
            />
          </SkillCardsContainer>
        </SkillConatiner>

        {/* Mobile App Development skills */}
        <SkillConatiner>
          <SkillsHeader
            skill={showSkills.showMoblieSkills}
            onSKillClick={toggleSkill(
              ShowSkillsKeys.SHOW_MOBILE_SKILLS
            )}
            heading={"Mobile App Development"}
          />

          <SkillCardsContainer
            showSkills={
              showSkills.showMoblieSkills
            }
          >
            {/* Flutter */}
            <SkillCard
              skillIcon={
                <FlutterIcon className="w-8 h-8" />
              }
              title="Flutter"
              percentage={15}
            />
            {/* React Native */}
            <SkillCard
              skillIcon={
                <ReactNativeIcon className="w-8 h-8" />
              }
              title="React Native"
              percentage={15}
            />
          </SkillCardsContainer>
        </SkillConatiner>

        {/* Database skills */}
        <SkillConatiner>
          <SkillsHeader
            skill={showSkills.showDatabaseSkills}
            onSKillClick={toggleSkill(
              ShowSkillsKeys.SHOW_DATABASE_SKILLS
            )}
            heading={"Databases"}
          />

          <SkillCardsContainer
            showSkills={
              showSkills.showDatabaseSkills
            }
          >
            {/* Firebase */}
            <SkillCard
              skillIcon={
                <FirebaseIcon className="w-8 h-8" />
              }
              title="Firebase"
              percentage={100}
            />
            {/* Mongo DB */}
            <SkillCard
              skillIcon={
                <MongoDBIcon className="w-8 h-8" />
              }
              title="Mongo DB"
              percentage={15}
            />
            {/* Microsoft SQL Server */}
            <SkillCard
              skillIcon={
                <MicrosoftServerIcon className="w-8 h-8" />
              }
              title="Micorsoft SQL Server"
              percentage={50}
            />
            {/* MySQL */}
            <SkillCard
              skillIcon={
                <MSQLIcon className="w-8 h-8" />
              }
              title="MySQL"
              percentage={70}
            />
            {/* Postgrase SQL */}
            <SkillCard
              skillIcon={
                <PostgraseSQLIcon className="w-8 h-8" />
              }
              title="Postgrase SQL"
              percentage={70}
            />
            {/* Oracle DB */}
            <SkillCard
              skillIcon={
                <OracleIcon className="w-8 h-8" />
              }
              title="Oracle DB"
              percentage={15}
            />
            {/* Radis */}
            <SkillCard
              skillIcon={
                <RedisIcon className="w-8 h-8" />
              }
              title="Radis"
              percentage={15}
            />
          </SkillCardsContainer>
        </SkillConatiner>

        {/* Data Science skills */}
        <SkillConatiner>
          <SkillsHeader
            skill={
              showSkills.showDataScienceSkills
            }
            onSKillClick={toggleSkill(
              ShowSkillsKeys.SHOW_DATA_SCIENCE_SKILLS
            )}
            heading={"Data Science"}
          />

          <SkillCardsContainer
            showSkills={
              showSkills.showDataScienceSkills
            }
          >
            {/* Numpy */}
            <SkillCard
              skillIcon={
                <NumpyIcon className="w-8 h-8" />
              }
              title="Numpy"
              percentage={100}
            />
            {/* Pandas */}
            <SkillCard
              skillIcon={
                <PandasIcon className="w-8 h-8" />
              }
              title="Pandas"
              percentage={100}
            />
            {/* Tensorflow */}
            <SkillCard
              skillIcon={
                <TensorflowIcon className="w-8 h-8" />
              }
              title="Tensorflow"
              percentage={50}
            />
            {/* Selenium */}
            <SkillCard
              skillIcon={
                <SeleniumIcon className="w-8 h-8" />
              }
              title="Seleneium"
              percentage={100}
            />
            {/* Jupyter Notebooks */}
            <SkillCard
              skillIcon={
                <JupyterNotebookIcon className="w-8 h-8" />
              }
              title="Jupyter Notebooks"
              percentage={100}
            />
            {/* Matlab */}
            <SkillCard
              skillIcon={
                <MatlabIcon className="w-8 h-8" />
              }
              title="Matlab"
              percentage={15}
            />
            {/* Matplotlib */}
            <SkillCard
              skillIcon={
                <MatplotlibIcon className="w-8 h-8" />
              }
              title="Matplotlib"
              percentage={100}
            />
            {/* Pytorch */}
            <SkillCard
              skillIcon={
                <PytorchIcon className="w-8 h-8" />
              }
              title="Pytorch"
              percentage={15}
            />
            {/* R */}
            <SkillCard
              skillIcon={
                <RIcon className="w-8 h-8" />
              }
              title="R"
              percentage={15}
            />
            {/* Scikit Learn */}
            <SkillCard
              skillIcon={
                <ScikitLearnIcon className="w-8 h-8" />
              }
              title="Scikit Learn"
              percentage={15}
            />
            {/* Scipy */}
            <SkillCard
              skillIcon={
                <ScipyIcon className="w-8 h-8" />
              }
              title="Scipy"
              percentage={15}
            />
          </SkillCardsContainer>
        </SkillConatiner>

        {/* Blockchain */}
        <SkillConatiner>
          <SkillsHeader
            skill={showSkills.showBlockchain}
            onSKillClick={toggleSkill(
              ShowSkillsKeys.SHOW_BLOCKCHAIN
            )}
            heading={"Blockchain"}
          />

          <SkillCardsContainer
            showSkills={showSkills.showBlockchain}
          >
            {/* Solidity */}
            <SkillCard
              skillIcon={
                <SolidityIcon className="w-8 h-8" />
              }
              title="Solidity"
              percentage={15}
            />
          </SkillCardsContainer>
        </SkillConatiner>

        {/* Version Control */}
        <SkillConatiner>
          <SkillsHeader
            skill={showSkills.showVersionControl}
            onSKillClick={toggleSkill(
              ShowSkillsKeys.SHOW_VERSION_CONTROL
            )}
            heading={"Version Control"}
          />

          <SkillCardsContainer
            showSkills={
              showSkills.showVersionControl
            }
          >
            {/* Git */}
            <SkillCard
              skillIcon={
                <GitIcon className="w-8 h-8" />
              }
              title="Git"
              percentage={100}
            />
            {/* Github */}
            <SkillCard
              skillIcon={
                <GithubIcon className="w-8 h-8" />
              }
              title="Github"
              percentage={100}
            />
            {/* Gitlab */}
            <SkillCard
              skillIcon={
                <GitladIcon className="w-8 h-8" />
              }
              title="Githlab"
              percentage={70}
            />
            {/* bitbucket */}
            <SkillCard
              skillIcon={
                <BitbucketIcon className="w-8 h-8" />
              }
              title="Bitbucket"
              percentage={70}
            />
          </SkillCardsContainer>
        </SkillConatiner>

        {/* Tools */}
        <SkillConatiner>
          <SkillsHeader
            skill={showSkills.showTools}
            onSKillClick={toggleSkill(
              ShowSkillsKeys.SHOW_TOOLS
            )}
            heading={"Tools"}
          />

          <SkillCardsContainer
            showSkills={showSkills.showTools}
          >
            {/* Power BI */}
            <SkillCard
              skillIcon={
                <PowerBIIcon className="w-8 h-8" />
              }
              title="Power BI"
              percentage={100}
            />
            {/* Tableau */}
            <SkillCard
              skillIcon={
                <TableauIcon className="w-8 h-8" />
              }
              title="Tableau"
              percentage={100}
            />
            {/* Docker */}
            <SkillCard
              skillIcon={
                <DockerIcon className="w-8 h-8" />
              }
              title="Docker"
              percentage={15}
            />
            {/* Kubernetes */}
            <SkillCard
              skillIcon={
                <KubernetesIcon className="w-8 h-8" />
              }
              title="Kubernetes"
              percentage={15}
            />
            {/* Figma */}
            <SkillCard
              skillIcon={
                <FigmaIcon className="w-8 h-8" />
              }
              title="Figma"
              percentage={15}
            />
            {/* Excel */}
            <SkillCard
              skillIcon={
                <ExcelIcon className="w-8 h-8" />
              }
              title="Excel"
              percentage={100}
            />
            {/* Elastic Search */}
            <SkillCard
              skillIcon={
                <ElasticsearchIcon className="w-8 h-8" />
              }
              title="Elastic Search"
              percentage={15}
            />
            {/* Access */}
            <SkillCard
              skillIcon={
                <AccessIcon className="w-8 h-8" />
              }
              title="Access"
              percentage={15}
            />
          </SkillCardsContainer>
        </SkillConatiner>
      </div>
      {/* <ShootingStars /> */}
    </section>
  );
};

export default Skills;
