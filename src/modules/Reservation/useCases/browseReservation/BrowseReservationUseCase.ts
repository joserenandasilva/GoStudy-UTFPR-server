import { Reservation } from '../../../../entities/Reservation';
import { IReservationRepository } from '../../IReservationRepository';

class BrowseReservationUseCase {
    constructor(
        private reservationRepository: IReservationRepository
    ) {}
    
    async execute(query:string): Promise<Reservation>{
        try {
            const reservation:Reservation = await this.reservationRepository.findById(query);
            if (!reservation) throw new Error("Not Found Exception");
            return reservation;
        } catch (error) {
            console.log((error as Error).message);
            return null;
        }

    }
}
export { BrowseReservationUseCase };