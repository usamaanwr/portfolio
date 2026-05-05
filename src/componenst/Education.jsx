export const Education = () => {
  const eduData = [
    { degree: "Matriculation (Science)", institute: "Board of Secondary Education Karachi", year: "2018" },
    { degree: "Intermediate (Pre-Engineering)", institute: "Ziauddin Examination Board", year: "2023" },
    { degree: "Full Stack MERN Development", institute: "Saylani Mass IT Training (SMIT) – IT Education in Pakistan", year: "Present" }
  ];

  return (
    <section id="education" className="py-20 bg-[#0a0a0a] px-6 lg:px-20 border-t border-white/5">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl font-black text-white mb-12 text-center uppercase tracking-tighter italic">Education</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {eduData.map((item, index) => (
            <div key={index} className="p-8 bg-[#141414] border border-white/5 rounded-3xl">
              <span className="text-blue-500 font-mono text-sm uppercase">{item.year}</span>
              <h3 className="text-xl font-bold text-white mt-2">{item.degree}</h3>
              <p className="text-slate-500 mt-1">{item.institute}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};