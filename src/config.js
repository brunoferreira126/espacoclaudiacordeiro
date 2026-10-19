// DADOS DE DEMONSTRAÇÃO: confirme informações e autorizações antes da publicação oficial.
export const clinic = {
  name: 'Cláudia Cordeiro', subtitle: 'Estética & Cosmética', city: 'Eusébio, Ceará',
  whatsapp: '', // Insira apenas o WhatsApp OFICIAL validado, ex.: '5585987654321'.
  instagram: 'https://www.instagram.com/espacoclaudiacordeiro/',
  linktree: 'https://linktr.ee/clinicaclaudiacordeiro',
  mapQuery: 'Centro, Eusébio, Ceará', // Localização aproximada; substituir pelo endereço oficial confirmado.
  services: [
    {id:'limpeza', category:'FACIAL', title:'Limpeza de pele', description:'Uma experiência de cuidado e atenção à pele.', photo:'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=1000&q=85'},
    {id:'microagulhamento', category:'FACIAL', title:'Microagulhamento', description:'Conheça as possibilidades de cuidados faciais oferecidos pelo espaço.', photo:'https://images.unsplash.com/photo-1611930022073-b7a4ba5fcccd?auto=format&fit=crop&w=1000&q=85'},
    {id:'ultrassom', category:'TECNOLOGIA', title:'Ultrassom micro e macrofocado', description:'Tecnologia apresentada nos conteúdos públicos do espaço.', photo:'https://images.unsplash.com/photo-1556228578-0d85b1a4d571?auto=format&fit=crop&w=1000&q=85'},
    {id:'posoperatorio', category:'CORPORAL', title:'Cuidados pós-operatórios', description:'Atendimento individualizado conforme avaliação profissional.', photo:'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1000&q=85'},
  ]
};
export function whatsLink(service){
  if(!clinic.whatsapp) return null;
  const text=service ? `Olá! Conheci o Espaço Cláudia Cordeiro pelo site e gostaria de informações sobre ${service}.` : 'Olá! Conheci o Espaço Cláudia Cordeiro pelo site e gostaria de saber mais sobre os atendimentos.';
  return `https://wa.me/${clinic.whatsapp.replace(/\D/g,'')}?text=${encodeURIComponent(text)}`;
}
