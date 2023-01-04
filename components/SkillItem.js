export const SkillItem = ({ skill }) => {
  return (
    <div className="py-5">
      <div className={`mx-8`}>
        <img src={skill.image.src} alt="Monir Saikat" className="w-24" />
      </div>
    </div>
  );
};
