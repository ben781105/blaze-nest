const team = [
  {
    name: "Jeny O.",
    role: "UIUX/Product Designer",
    img: "/imgs/jeny.png",
  },
  {
    name: "Teni Ray",
    role: "Frontend Developer",
    img: "/imgs/teni.png",
  },
  {
    name: "Sam Wit",
    role: "Backend Developer",
    img: "/imgs/sam.png",
  },
  {
    name: "Petr Right",
    role: "Project Manager",
    img: "/imgs/petri.png",
  },
  {
    name: "Adam Etr",
    role: "Business Manager",
    img: "/imgs/adam.png",
  },
  {
    name: "Yurt Kurt",
    role: "Marketing Manager",
    img: "/imgs/yurt.png",
  },
];

function TheTeam() {
  return (
    <section className="flex flex-col justify-center items-center px-5 py-16 space-y-5 bg-[#EFE4D7]">
      <h2 className="bg-gradient-black-blue text-3xl font-bold">Our Team</h2>

      <div className="flex justify-center items-stretch gap-4 flex-wrap">
        {team.map((member, index) => (
          <div
            className="flex flex-col justify-center items-center space-y-4 shadow-2xl bg-white rounded-lg p-4 text-center w-80"
            key={index}
          >
            <img
              src={member.img}
              alt={`${member.name}-img`}
              className="aspect-square w-full object-cover rounded-md"
            />
            <p className="text-xl font-bold">{member.name}</p>
            <p className="text-gray-500">{member.role}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default TheTeam;
