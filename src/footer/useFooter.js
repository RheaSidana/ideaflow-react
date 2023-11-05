import { EmailRounded, FacebookRounded, LinkedIn, Twitter } from "@mui/icons-material";
import useConstants from "../useConstants";

const useFooter = () => {
  const { 
    FacebookPageURL, 
    TwitterPageURL, 
    Email, 
    LinkedinProfileURL,
 } = useConstants();
  return {
    socialMedias: [
    {
        to: FacebookPageURL,
        icon: <FacebookRounded />,
        text: "Facebook",
    },
    {
        to: TwitterPageURL,
        icon: <Twitter />,
        text: "Twitter",
    },
    {
        to: LinkedinProfileURL,
        icon: <LinkedIn />,
        text: "LinkedIn",
    },
    {
        to: Email,
        icon: <EmailRounded />,
        text: "Email",
    },
  ],
  latestUpdates: [
    {
        to: "https://medium.com/ideaflow",
        text: "Blog",
    },
    {
        to: "https://www.crunchbase.com/organization/ideaflow",
        text: "Funding",
    },
    {
        to: "https://www.youtube.com/watch?v=4feZo9PqTlo",
        text: "Bullet View Video",
    },
  ],
  rabbitHoles: [
    {
        to: "https://en.wikipedia.org/wiki/Memex",
        text: "Memex",
    },
    {
        to: "https://zettelkasten.de/introduction/",
        text: "Niklas Luhmann's Zettelkasten",
    },
    {
        to: "https://en.wikipedia.org/wiki/Collective_intelligence",
        text: "Collective IQ",
    },
    {
        to: "https://en.wikipedia.org/wiki/Intelligence_amplification",
        text: "Intelligence amplification",
    },
    {
        to: "https://en.wikipedia.org/wiki/Giant_Global_Graph",
        text: "Tim Berners-Lee’s Giant Global Graph",
    },
    {
        to: "https://en.wikipedia.org/wiki/Polymath_Project",
        text: "Polymath Project",
    },
    {
        to: "https://math.mit.edu/~dspivak/CT4S.pdf",
        text: "Category Theory for Scientists",
    },
    {
        to: "http://ideaflowplan.jacobcole.net/",
        text: "ideaflowplan.jacobcole.net",
    },
  ],
  quickLinks: [
    {
        to: "/",
        text: "Home",
    },
    {
        to: "/about",
        text: "About",
    },
    {
        to: "/contact",
        text: "Contact",
    },
    {
        to: "/careers",
        text: "Careers",
    },
    {
        to: "/privacy-policy",
        text: "Privacy Policy",
    },
  ]
};
};

export default useFooter;
