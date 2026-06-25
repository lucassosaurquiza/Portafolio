import {
  FaBriefcase,
  FaChartLine,
  FaCheck,
  FaCode,
  FaDatabase,
  FaDiagramProject,
  FaLock,
  FaMobileScreenButton,
  FaPenRuler,
  FaTableCellsLarge,
  FaWindowMaximize,
} from 'react-icons/fa6'
import {
  SiCss,
  SiExpress,
  SiGit,
  SiHtml5,
  SiJavascript,
  SiMysql,
  SiNodedotjs,
  SiReact,
  SiVercel,
} from 'react-icons/si'

const iconMap = {
  react: SiReact,
  javascript: SiJavascript,
  html: SiHtml5,
  css: SiCss,
  node: SiNodedotjs,
  express: SiExpress,
  api: FaCode,
  jwt: FaLock,
  mysql: SiMysql,
  schema: FaDiagramProject,
  sql: FaDatabase,
  check: FaCheck,
  design: FaPenRuler,
  landing: FaWindowMaximize,
  conversion: FaChartLine,
  vercel: SiVercel,
  code: FaCode,
  git: SiGit,
  mobile: FaMobileScreenButton,
  layout: FaTableCellsLarge,
  canvas: FaDiagramProject,
  business: FaBriefcase,
}

function TechIcon({ name, className = '' }) {
  const Icon = iconMap[name] || FaCode

  return <Icon className={`tech-icon tech-icon--${name} ${className}`.trim()} aria-hidden="true" />
}

export default TechIcon
