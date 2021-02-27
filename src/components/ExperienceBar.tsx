export function ExperienceBar() {
    return(
        <header className="experience-bar">
            <span>0xp</span>
            <div className="experience-bar-div">
                <div className="experience-bar-div-div" style={{ width:'50%' }} />
                <span className="span-current-experience" style={{ left:'50%' }}>
                    300xp
                </span>
            </div>
            <span>600xp</span>
        </header>
    )
}