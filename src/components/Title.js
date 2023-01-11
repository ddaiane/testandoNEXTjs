export default function Title({children, as}) {
    const Tag = as;
    //define o estilo dinamicamente para cada tag que receber por parametro no as
    return (
      <>
        <Tag> {children} </Tag>
        <style jsx>{`
          ${Tag} {
            color: red;
          }
        `} </style>
      </>
    )
  }