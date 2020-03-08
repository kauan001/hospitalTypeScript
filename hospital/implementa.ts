namespace hospital{

    let p = new Paciente();
          p.setnome("Marcos");
        p.setcpf("111.111.111-11");
        p.setcodPaciente(1);
    
    let p1 = new Paciente();
        p1.setnome("Julia");
        p1.setcpf("222.222.222-22");
        p1.setcodPaciente(2);

    let p2 = new Paciente();
        p2.setnome("Cesar");
        p2.setcpf("333.333.333-33");
        p2.setcodPaciente(3);

    let e = new Enfermeiro();
        e.setnome("Jubscrelza");
        e.setcpf("123.123.123-12");
        e.setcodFuncionario(1);
        e.setcoren(12);
    let e1 = new Enfermeiro();
        e1.setnome("Fernanda");
        e1.setcpf("345.345.345-34");
        e1.setcodFuncionario(2);
        e1.setcoren(12);
    let e2 = new Enfermeiro();
        e2.setnome("Gabriela");
        e2.setcpf(".567.567.567-56");
        e2.setcodFuncionario(3);
        e2.setcoren(13);
    let m = new Medico();
        m.setnome("Catapinbas");
        m.setespecialidade("Anestesista");
        m.setcrm(123);
        m.setcpf("001.123.001-11");
        m.setcodFuncionario(21);
    let m1 = new Medico();
        m1.setnome("Tobias");
        m1.setespecialidade("Cirurgião");
        m1.setcrm(456);
        m1.setcpf("123.001.001-12");
        m1.setcodFuncionario(22);
    let m2 = new Medico();
        m2.setnome("Mariscrelza");
        m2.setespecialidade("Pediatra");
        m2.setcrm(789);
        m2.setcpf("001.001.123-13");
        m2.setcodFuncionario(23);

    let h = new Hospital ();
        h.setnome("Instituiçao Hobscrelzo Socorre");
        h.addEnfermeiros(e);
        h.addEnfermeiros(e1);
        h.addEnfermeiros(e2);
        h.addMedicos(m);
        h.addMedicos(m1);
        h.addMedicos(m2);
        h.addPacientes(p);
        h.addPacientes(p1);
        h.addPacientes(p2);

        document.getElementById("hospital").textContent=h.getnome();

        let tbMedico = document.getElementById("tbMedico");
        h.getmedicos().forEach(h=>{
            let nome = h.getnome();
            let cpf = h.getcpf();
            let crm = h.getcrm();
            let especialidade = h.getespecialidade();
            let html = "<tr><td>"+nome+"</td><td>"+cpf+"</td><td>"+crm+"</td><td>"+especialidade+"</td></tr>";
            tbMedico.innerHTML += html;
        })
        let tbEnfermeiras = document.getElementById("tbEnfermeiras");
        h.getEnfermeiros().forEach(h=>{
            let nome = h.getnome();
            let cpf = h.getcpf();
            let corem = h.getcoren();
            let html = "<tr><td>"+nome+"</td><td>"+cpf+"</td><td>"+corem+"</td></tr>";
            tbMedico.innerHTML += html;
        })
        let tbPacientes = document.getElementById("tbPacientes");
        h.getpacientes().forEach(h=>{
            let nome = h.getnome();
            let cpf = h.getcpf();
            let cod = h.getcodPaciente();
            let html = "<tr><td>"+nome+"</td><td>"+cpf+"</td><td>"+cod+"</td></tr>";
            tbMedico.innerHTML += html;
        })

}