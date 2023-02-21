import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { BiBox, BiCommand, BiMessageSquareEdit, BiPlus } from "react-icons/bi";
import { BsGithub, BsTwitter } from "react-icons/bs";
import { Command, CommandInput, CommandList, CommandOption } from "superkey";

const data = [
  {
    id: 1,
    name: "Settings",
    href: "https://unlimitpotential.com/my-profile",
    icon: <BiPlus />,
  },
  {
    id: 2,
    name: "New Workspace",
    href: "https://lillieai-betav1b.unlimitpotential.com/setup",
    icon: <BiBox />,
  },
  {
    id: 3,
    name: "New Toolkit",
    href: "https://spaces.unlimitpotential.com/account",
    icon: <BiMessageSquareEdit />,
  },
  {
    id: 4,
    name: "Apps & Tools",
    href: "https://lillie-ai-betav1.unlimitpotential.com/",
    icon: <BsGithub />,
  },
  {
    id: 5,
    name: "Creative Adsets",
    href: "http://connect.unlimitpotential.com/",
    icon: <BsTwitter />,
  },
  {
    id: 5,
    name: "Manage Spaces",
    href: "http://connect.unlimitpotential.com/feed",
    icon: <BsTwitter />,
  },
  {
    id: 5,
    name: "Subscribers",
    href: "https://accounts.unlimitpotential.com/form1",
    icon: <BsTwitter />,
  },
  {
    id: 5,
    name: "Invites",
    href: "http://connect.unlimitpotential.com/leads",
    icon: <BsTwitter />,
  },
  {
    id: 5,
    name: "more",
    href: "http://lillieai-betav1b.unlimitpotential.com/",
    icon: <BsTwitter />,
  },
];

const CommandMenu = () => {
  const [value, setValue] = useState("");
  const [open, setOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    function handleKeyDown(event?: KeyboardEvent) {
      if (event?.key === "k" && (event?.metaKey || event?.ctrlKey)) {
        event?.preventDefault();
        setOpen(!open);
      }
    }

    if (typeof window !== "undefined") {
      window.addEventListener("keydown", handleKeyDown);
      return () => {
        window.removeEventListener("keydown", handleKeyDown);
      };
    }
  }, [open]);

  const filteredData = data.filter((doc) => {
    return doc.name?.toLowerCase().includes(value.toLowerCase());
  });

  return (
    <>
      <BiCommand
        size={22}
        className="mr-4 cursor-pointer text-black transition duration-200 ease-in-out hover:scale-110 hover:transform hover:text-gray-500"
        onClick={() => setOpen(true)}
      />
      <Command
        open={open}
        onClose={() => {
          setOpen(!open);
        }}
        commandFunction={(action) => {
          setOpen(false);
          router.push(`${action}`);
        }}
        className="border border-neutral-800 bg-midnight text-white"
        overlayClassName="bg-midnight/50"
      >
        <CommandInput
          placeholder="Search..."
          onChange={(e) => {
            setValue(e.target.value);
          }}
          className="border-b border-neutral-800 bg-midnight text-white"
        />
        <CommandList className="border-none">
          {filteredData.map((action) => (
            <CommandOption
              key={action.id}
              value={action.href || ""}
              activeClassName="bg-gray-100 dark:bg-zinc-700/25"
            >
              <div className="flex items-center space-x-3 py-1 px-1">
                <div className="icon-size-8 flex-shrink-0">{action.icon}</div>
                <h1 className="text-black">{action.name}</h1>
              </div>
            </CommandOption>
          ))}
        </CommandList>
      </Command>
    </>
  );
};

export default CommandMenu;