import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-estate-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './estate-card.component.html',
  styleUrls: ['./estate-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EstateCardComponent {
  @Input() designation!: string | undefined;
  @Input() officeNumber!: string | undefined;
  @Input() apartmentNumber!: string | undefined;
  @Input() area!: string | undefined;
  @Input() price!: string | undefined;
  @Input() totalPrice!: string | undefined;
}
