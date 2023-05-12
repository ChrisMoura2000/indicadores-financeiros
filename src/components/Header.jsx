export const Header = () => {
    const style = {
        navBar: `
            bg-secondary
            text-light
            p-3
        `,
        title: `fs-2`
    }

    return (
        <div className={style.navBar}>
            <h1 className={style.title}>Indicadores Financeiros</h1>
        </div>
    )
}